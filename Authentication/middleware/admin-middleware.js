


const isadminUser = (req,res,next)=>{
    if(!req.userInfo || req.userInfo.role !== "admin"){
        return res.status(403).send(
            {
                success : false,
                message:"You are not an admin user. Access Denied"
            });
    }
    next();
}

module.exports = isadminUser;