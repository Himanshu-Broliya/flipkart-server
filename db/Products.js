const mongoose = require('mongoose');
require('dotenv').config()

const ProductSchema = mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String,
    category:String,
    specifications:Object
})

module.exports = mongoose.model('products',ProductSchema);