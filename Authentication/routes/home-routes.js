const express = require("express");
const authMiddleware = require("../middleware/auth-middleware")
const router = express.Router();


router.get("/welcome", authMiddleware,(req,res)=>{

    const {username, userId, role} = req.userInfo;

    res.json({
        message: "Welcome to home page",
        user : {
            _id : userId,
            username : username,
            role : role
        }
    });

    
});

module.exports = router;


// Login Chesinappudu manam oka AccessToken Create chesthunnam
// Access Token ni use cheyali edhi valid aithae login succesfull.