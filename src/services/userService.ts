const UserModel = require("../models/userModel");


const fetchAllUsers = async () => {
    return await UserModel.find({})
}

const addNewUser = async (userData: any) => {
    const newUser = new UserModel(userData);
    return await newUser.save();
}

module.exports = {
    fetchAllUsers,
    addNewUser
}