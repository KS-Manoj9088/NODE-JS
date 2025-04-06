const jwt = require("jsonwebtoken");


const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers["authorization"];
    console.log(authHeader);

    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({
            error: "Unauthorized Access. No token Provided"
        });
    }

    // decode the token
    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decodedToken);

        req.userInfo = decodedToken;
        next();
    }
    catch(error){
        return res.status(500).json({
            error: "Error decoding token",
            message: error.message
        });
    }

    next();
}

module.exports = authMiddleware;