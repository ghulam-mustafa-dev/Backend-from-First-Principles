const User = require("../models/UserModel");


const Register = async (req, res) => {
    try{
        const { email, password } = req.body;
        
        const user = await User.create({
            email,
            password
        });
        res.status(201).json({message: "User Created"});
        
    }
    catch(error){
        res.status(500).json({error: "Error"});
    }
}

const Login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const sessionId = Math.random();
        res.cookie('sessionId', sessionId, {
            httpOnly: true
        })
        res.status(200).json({message: "Login Sucess"})
    }
    catch(error){
        res.status(500).json({error: "Error"});
    }
}


module.exports = { Register, Login };