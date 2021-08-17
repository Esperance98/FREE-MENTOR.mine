import express from "express"
import UserController from '../controller/userController';
import Validator from '../middlewares/userValidaytion';
import DataChecker from '../middlewares/dataChecker'

const router = express.Router()

// signup route

router.post("/signup", 
Validator.newAccountRules(),
Validator.validateInput,
DataChecker.userExist,
DataChecker.checkAge,
UserController.signupUser)

// login router
router.post("/signIn", UserController.signInUser)
router.get("/allusers", UserController.getAllUsers)

export default router;
