const adminMiddleware = async (req,res,next) =>{
    try {

        const adminRole = req.user.isAdmin;
        if(!adminRole){
            res.status(403).json({message : "Access denied,user is not admin"});
        }
        // res.status(200).json({message : "Access granted"});
        next();
    } catch (error) {
        next(error);
        // res.status(400).json({message : "error"});
    }
}

module.exports = adminMiddleware;