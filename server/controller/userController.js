import mongoose from "mongoose"
import bcrypt from 'bcrypt';
import UserInfo from"../models/userModel";
class UserController{
    static signupUser = async(req,res)=>{

        const {firstName, lastName, email, password,phone, gender, age} = req.body;
       
        const bcryptedPassword = bcrypt.hashSync(password, 10)
        const userObject = {firstName, lastName, email, password:bcryptedPassword, phone, gender,age}
        const newUser = await new UserInfo(userObject)
         const user =  newUser.save()
         res.status(201).json({status:201, user:user[0], message:"user creted successful!"}) 
    }


    static signInUser = async (req, res) => {
        const { email, password } = req.body;
        
        const userExist = UserInfo.findOne({email: email});
        if(!userExist) return res.status(404).json({status:404, message:"User doesn't exist"})

        console.log(userExist)
        console.log('----------------------------------')

        if(bcrypt.compareSync(userExist.password,password)){

            const token = TokenAuth.tokenGenerator({
                id: userExist._id,
                email: userExist.email,
                status: userExist.status,
                role: userExist.role
            })
            return res.status(200).json({
                status: 200,
                message: "User logged in successfully",
                token:token,
                data: userExist
            })
        }

        return res.status(404).json({
            status: 404,
            message: "Password is incorrect, Please try again.."

        })

    }


}

export default UserController;