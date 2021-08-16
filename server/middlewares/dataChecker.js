import userModel from '../models/userModel';

class Checker{
    static userExist = async (req, res, next) =>{
        const {email} = req.body;
        const userExist = await userModel.find({email:email})

        if(userExist[0]) return res.status(409).json({status:409, message:"User already exist in system, Please use an other email to proceed!"})

        return next()
    }

    static checkAge = (req, res, next) => {
        const {age} = req.body;
        if(age < 18) return res.status(409).json({status:409, message:"You are under the ages, No access!"})
        return next()

    }
}

export default Checker;