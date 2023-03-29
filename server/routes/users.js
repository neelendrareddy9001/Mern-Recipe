import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

//Adding the new user From client
router.post("/register", async(req, res) => {
    //We are getting the username that sent from the FrontEnd
    const {username , password} = req.body;

    //Find the user if Exist which is sent from the FrontEnd
    const user = await UserModel.findOne({username});

    //If user is Available which data come from FrontEnd and return
    if(user) {
        return res.json({message : "User already exist!"});
    }
    
    //make the password unique password which is generated like hash password 
    const hassPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({username, password : hassPassword});
    await newUser.save()

    res.json({message : "User Registered"});
});

router.post("/login", async(req, res) => {
    //sent from Client
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    //if not found the tuser from the Client
    if(!user) {
        return res.json({message : "User Doesn't Exist"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.json({message : "Username or Password is InCorrect"});
    }

    const token = jwt.sign({id : user._id}, "secret");
    res.json({token, userId : user._id});
});

export {router as userRouter};
