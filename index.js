require('./db/config');
require('dotenv').config()
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const cors = require('cors');
const express = require('express');
const ProductSchema = require('./db/Products');
const product = require('./data/DummyData');
const app = express();
const PORT = process.env.PORT;
const MobileSchema = require('./db/Mobile');
const mobileData = require('./data/MobileData');
const stripe = require('stripe')(process.env.STRIPE_API_KEY)
const OtpSchema = require('./db/OtpSchema')
const otpGenerator = require('otp-generator')
const twilio = require('twilio');
const UserSchema = require('./db/UserSchema')

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_SECRET_TOKEN;
const {OtpTimeVerification} = require('./helper/OtpHelper')
const KEY = process.env.KEY

const client = new twilio(accountSid, authToken);


app.use(express.json());
app.use(cors());

app.post('/api/send-otp',async(req,resp)=>{
    try {
        const otp = otpGenerator.generate(6, { upperCaseAlphabets:false,specialChars:false,lowerCaseAlphabets:false });
        const {mobileNumber} = req.body;
        const cDate = new Date();

        await OtpSchema.findOneAndUpdate(
            { mobileNumber:mobileNumber },
            { otp:otp,otpExpiration: new Date(cDate.getTime()) },
            { upsert:true , new:true, setDefaultOnInsert:true }
        )

        await client.messages.create({
            body: `Your OTP is: ${otp}. This is valid for 2 minutes only.`,
            to: mobileNumber,
            from: process.env.TWILIO_MOBILE_NUMBER
        })

        return resp.status(400).send({
            success:true,
            msg:"otp send successfully"
        })
    } catch (error) {
        return resp.status(400).send({
            success:false,
            msg:error.message
        })
    }
})

app.post('/api/verify-otp',async(req,resp)=>{
    try {
        const {mobileNumber , otp} = req.body;

        const result = await OtpSchema.findOne({mobileNumber:mobileNumber,otp:otp});

        if(result){
            const isOtpExpired = await OtpTimeVerification(result.otpExpiration)
            if(isOtpExpired){
                return resp.status(400).send({
                    success:false,
                    msg:"Your OTP has been expired!"
                })
            }else{
                jwt.sign({result},KEY , {expiresIn:"2h"},(err,token)=>{
                    if(err){
                        console.log({status:false,msg:"Something went wrong. Please try again later!"})
                    }else{
                        return resp.status(200).send({
                            success:true,
                            msg:"OTP verified Successfully!",
                            token:token
                        }) 
                    }
                })
            }

            return resp.status(200).send({
                success:true,
                msg:"OTP verified Successfully!"
            }) 
        }else{
            return resp.status(400).send({
                success:false,
                msg:"Wrong Otp"
            })
        }

    } catch (error) {
        return resp.status(400).send({
            success:false,
            msg:error.message
        })
    }
})


// register Api
app.post('/register',async(req,resp)=>{
    try {
        const {email,mobileNumber} = req.body;
        const userExist = await UserSchema.findOne({email: email, mobileNumber:mobileNumber});
        if(userExist){
            resp.send({success:false,msg:"User already exist, Please login!"});
        }else{
            let newUser = new UserSchema(req.body);
            let result =  await newUser.save();
            jwt.sign({result},KEY , {expiresIn:"2h"},(err,token)=>{
                if(err){
                    console.log({success:false,msg:"Something went wrong. Please try again later!"})
                }else{
                    resp.send({success:true, result, auth:token});
                }
            })
        }
    } catch (error) {
        return resp.status(400).send({
            success:false,
            msg:error.message
        })
    }
})

app.get('/products/:category', async (req, resp) => {
    try {
        let result = await ProductSchema.find({category:req.params.category});
        if (result) {
            resp.send(result)
        } else {
            resp.send(false)
        }
    } catch (error) {
        resp.send(error.message);
    }
})

// first 10 products
app.get('/products', async (req, resp) => {
    try {
        let result = await ProductSchema.find({}).limit(10);
        if (result) {
            resp.send(result)
        } else {
            resp.send(false)
        }
    } catch (error) {
        resp.send(error.message);
    }
})


// last 10 records
app.get('/topDeals', async (req, resp) => {
    try {
        // let result = await ProductSchema.find().skip(db.collection.count() - 10);
        let result = await ProductSchema.find().sort({$natural:-1}).limit(10);

        if (result) {
            resp.send(result)
        } else {
            resp.send(false)
        }
    } catch (error) {
        resp.send(error.message);
    }
})


// All products API
app.get('/allProducts', async (req, resp) => {
    try {
        let result = await ProductSchema.find();
        if (result) {
            resp.send(result)
        } else {
            resp.send(false)
        }
    } catch (error) {
        resp.send(error.message);
    }
})


app.get('/mobiles', async (req, resp) => {
    try {
        let result = await MobileSchema.find();
        if (result) {
            resp.send(result)
        } else {
            resp.send(false)
        }
    } catch (error) {
        resp.send("mobile error", error.message);
    }
})


app.get('/productDetails/:id', async (req, resp) => {

    try {
        let result = await ProductSchema.findOne({ id: req.params.id });
        if (result) {
            resp.send(result)
        } else {
            resp.send(false)
        }
    } catch (error) {
        resp.send("mobile error", error.message);
    }
})


// Payment Api
app.post('/payment', async (req, resp) => {
    const { products } = req.body;
    
    const line_items = products.map((product) => ({
        price_data: {
            currency: 'INR',
            product_data: {
                name: product.title.shortTitle
            },
            unit_amount: product.price.cost * 100,
            
        },
        quantity: product.quantity,
    }));


    const customer = await stripe.customers.create({
        name: 'Jenny Rosen',
        description: "ecom data",
        email: "abc@gmail.com",
        phone: "1234567890",
        address: {
            line1: 'Delhi ',
            postal_code: '110001',
            city: 'Delhi',
            state: 'Delhi',
            country: 'India',
        },
    });

    const shippingInfo = "11001 Chatarpur Delhi India "

    const session = await stripe.checkout.sessions.create({
        customer_creation: "if_required",
        payment_method_types: ['card'],
        line_items: line_items,
        mode: 'payment',
        success_url: "https://flipkart-green.vercel.app/success",
        cancel_url:"https://flipkart-green.vercel.app/cancel",
        metadata:{shippingInfo},
        shipping_options:[
            {
                shipping_rate:process.env.SHIPPING_RATE,
            },
        ]
    });

    resp.json({ id: session.id})
})


app.listen(PORT, () => {
    console.log("server started")
});



const uploadProduct = async () => {
    try {
        let result = await ProductSchema.insertMany(product.p);
        console.log(result)
    } catch (error) {
        console.error("Error while inserting data", error);
    }
}

uploadProduct();