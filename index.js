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



app.use(express.json());
app.use(cors());


app.get('/products', async (req, resp) => {
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
        let m = await MobileSchema.insertMany(mobileData.m);
        console.log(m)
        let result = await ProductSchema.insertMany(product.p);
        console.log(result)
    } catch (error) {
        console.error("Error while inserting data", error);
    }
}

uploadProduct();