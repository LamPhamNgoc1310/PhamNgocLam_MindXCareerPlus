import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/userRouter.js';
import commentRouter from './Routes/commentRouter.js';
mongoose.connect("mongodb+srv://phamngoclam1310:abc@mongo.2sddxi3.mongodb.net/mongo?retryWrites=true&w=majority");

const app = express();
app.use(express.json());

app.use('/users' ,userRouter);
app.use('/comment', commentRouter);

app.listen(8080, () => {
    console.log('server running . . .');
})