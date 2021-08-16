

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: [true, "first-name is required"]
    },
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: { 
        type: String, 
        default: "12345@@@" },
    phone: String,
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    age: Number,
    role:{
        type: String,
        enum:["admin","mentor","user"],
        default:"user"
    },
    status:{
        type: String,
        enum:["active","inactive"],
        default:"active"
    }
});

const UserInfo = mongoose.model('User',UserSchema);
// const UserInfo = mongoose.model('User', UserSchema);

// export default UserInfo;  
export default UserInfo; 