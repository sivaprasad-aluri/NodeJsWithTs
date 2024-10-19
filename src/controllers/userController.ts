import { Request, Response, NextFunction } from "express";
const userService = require("../services/userService");

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.fetchAllUsers();
        res.json(users)
    } catch (err) {
        next(err);
    }

}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userData = req.body;
        const newUser = await userService.addNewUser(userData);
        res.status(201).json(newUser);
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAllUsers, 
    createUser
}