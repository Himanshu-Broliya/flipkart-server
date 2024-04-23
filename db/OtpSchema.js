const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    mobileNumber:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    otpExpiration:{
        type:Date,
        default:Date.now,
        get: (otpExpiration) => otpExpiration.getTime(),
        set: (otpExpiration) => new Date(otpExpiration)
    }
});

module.exports = mongoose.model('OTP',otpSchema);