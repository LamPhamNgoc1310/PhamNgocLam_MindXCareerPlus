import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js';

const MONGODB_URI = "mongodb+srv://phamngoclam1310:abc@mongo.2sddxi3.mongodb.net/mongo?retryWrites=true&w=majority";

await mongoose.connect(MONGODB_URI);

const app = express();

app.use(express.json());


// app.get("/users", async(req, res) => {
//     res.status(200).send(users)
// })
app.use('/users', userRouter);

app.listen(8080, () => {
    console.log("Running at port 8080");    
    
})