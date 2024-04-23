const OtpTimeVerification = async(otpTime) =>{
    try {
        // console.log('milisecond otp :'+otpTime)
        const cDateTime = new Date();
        let differenceTime = (otpTime - cDateTime.getTime())/1000;
        differenceTime /= 60;

        const minutes = Math.abs(differenceTime)
        // console.log("expired time :"+minutes)

        if(minutes > 2){
            return true;
        }

        return false;
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    OtpTimeVerification
}