import { Router } from "express";
import express from 'express';
import commentController from "../Controller/commentController.js";
import commentMiddleware from "../Middleware/commentMiddleware.js";
const commentRouter = express.Router();

commentRouter.get('/', commentController.getAllComment);
commentRouter.post('/' , commentController.createComment);
commentRouter.put('/:id/userId/:userId', commentMiddleware.validateUserPermission, commentController.updateComment);
// commentRouter.delete('/:id', commentController.deleteComment);


export default commentRouter;