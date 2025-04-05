
const User = require("../models/User"); 

// Use bcrypt module for hashing of password
const bcrypt = require("bcryptjs");

// Register/ Signup controller
const registerUser = async (req,res) => {
    try {
        //const {name , email, password, role} = req.body;
        
        console.log(req.body);
        
        // Check if user already exists in database.
        const existingUser = await User.findOne({ $or : [{email}, {name} ] });
        if(existingUser) {
            return res.status(400).json({
                success : false,
                message: "User already exists with same email or username."
            });
        }

        //Hash the User Password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new  User and save in database

        const newUser = new User({
            username : name,
            email,
            password : hashedPassword,
            role : role || "user"
        });

        await newUser.save();

        if(newUser){
            res.status(201).json({
                success : true,
                message : "user registered succesfully"
            });
        }
        else{
            res.status(400).json({
                success : false,
                message : "Unable to Register User. Please Try again."
            });
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// Login Controller
const loginUser = async (req,res) => {
    try {

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports = {registerUser, loginUser};