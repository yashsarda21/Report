const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const { json } = require("express");
const getAllUsers = async (req,res,next) => {
    try {
        const users = await User.find({}, {password:0});
        if(!users || users.length===0){
            res.status(404).json({message : "no users found"});
        }
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getAllContacts = async(req,res,next) =>{
    try {
        const contacts = await Contact.find();
        if(!contacts || contacts.length===0){
            res.status(404),json({message: "no contacts found"})
        }
        res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

const deleteUsersByID = async(req,res) =>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id});
        return res.status(200).json({message : "User deleted successfully"})
    } catch (error) {
        next(error);
    }
} 

const getUserByID = async(req,res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id} , {password:0})
        res.status(200).json({message: data});
    } catch (error) {
        next(error);
    }
}

const updateUserById = async(req,res) => {
    try {
        const id = req.params.id;
        const updateUserdata = req.body();

        const updatedData = await User.updateOne({_id:id} , {

            $set : updateUserdata,
        })
        res.status(200).json({updatedData});
    } catch (error) {
        next(error);
    }
}

module.exports = {getAllUsers,getAllContacts,deleteUsersByID,getUserByID,updateUserById};