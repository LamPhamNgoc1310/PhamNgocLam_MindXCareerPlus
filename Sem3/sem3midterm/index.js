import express from 'express'
import mongoose from 'mongoose'
import usersRouter from './routers/usersRouter.js';

mongoose.connect('mongodb+srv://phamngoclam1310:Abc123@midtermdb.jgdkx.mongodb.net/midtermdb')

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.listen(8080, () => {
    console.log("server is running at port 8080");
    
})