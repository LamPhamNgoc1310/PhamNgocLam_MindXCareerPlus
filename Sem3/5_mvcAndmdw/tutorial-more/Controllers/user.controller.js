import express from "express"
import mongoose from "mongoose";
import UserModel from "../Models/user.schema.js";

const userController = {
  createNewUser: async (req, res) => {
    let users = await UserModel.find();
    res.status(200).send(users);
  },
};

export default userController;
