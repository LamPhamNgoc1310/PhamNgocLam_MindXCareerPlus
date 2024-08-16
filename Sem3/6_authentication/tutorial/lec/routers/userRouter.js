import express from 'express';
import { Router } from "express";
import userController from "../controllers/userController.js";
import userMiddleware from '../middlewares/userMiddleware.js';

const userRouter = express.Router();

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

export default userRouter;