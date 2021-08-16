import {check, validationResult} from "express-validator";

class Validator{

    static validateInput = (req, res,next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage= errors.errors.map((err)=>err.msg);
            return res.status(400).json({
                status: 400,
                message: errorMessage
            })
        }

    return next();
    }

    static newAccountRules(){
        return [
            check("email","Please your email is Invalid").isEmail(),
            check("firstName","please your first name have special charcter").isAlpha(),
            check("lastName","please your Last name have special charcter").isAlpha(),
            check("gender","gender is invalid").isIn(['male','female']),
            check("phone", "Your phone number is invalid").isMobilePhone(),
            check("age","age should be integer").isInt(),
            check("password","Password must be strong").isStrongPassword()

        ];
    }

    static checkId(){
        return[
            check("id","id should be mongoId").isMongoId(),
        ]
    }


}

export default Validator;