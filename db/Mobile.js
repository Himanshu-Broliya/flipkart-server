const mongoose = require('mongoose')

const MobileSchema = mongoose.Schema({
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
    tagline:String
})

module.exports = mongoose.model('smartphones',MobileSchema);