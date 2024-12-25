const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req,res) => {
    try {
        res.status(200).send("Welcome tho the yash's classic website");
    } catch (error) {
        console.log(error);
    } 
}

const register = async(req,res) => {
    try {
        const{username ,email, phone, password, reportID, groupID} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg : "email already exists"});
        }
        const userCreated = await User.create({username ,email, phone, password, reportID, groupID});
        res.status(200).json({msg: "userCreated successfully" , token : await userCreated.generateToken(), userId: userCreated._id.toString()});
    } catch (error) {
        console.log(error);
    }
}


const login = async (req,res,next) => {
    try {
        const {email , password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({msg : "Credentials are not valid"});
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({msg: "login successfully" , token : await userExist.generateToken(), userId: userExist._id.toString()});
        }
        else{
            res.status(401).json({msg : "invalid email or password"});
        }

        // res.status(200).send("Welcome tho the yash's classic website");
    } catch (err) {
        // res.status(500);
        const status = 422;
        const messages = "fill the input properly";
        // const extraDetails = err.errors[0].message;

        const error = {
            status,messages,
        };
        next(error);
    }
}

const user = async (req, res) => {
    try {
      // const userData = await User.find({});
        const userData = req.user;
        // console.log(userData);
        return res.status(200).json({userData});
        } catch (error) {
        console.log(` error from user route ${error}`);
        }
};


module.exports = {home,register,login,user};