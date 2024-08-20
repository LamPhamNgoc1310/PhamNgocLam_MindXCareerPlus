import express from 'express'
import { Router} from 'express';
import usersController from '../controllers/usersController.js';

const usersRouter = express.Router();

usersRouter.get('/', usersController.getAllUsers)
usersRouter.post('/', usersController.createUser);
usersRouter.put('/update/:id', usersController.updateUser);
usersRouter.delete('/delete/:id', usersController.deleteUser);
usersRouter.post('/login/:id', usersController.login);
usersRouter.post('/logout/:id', usersController.logout)

export default usersRouter;