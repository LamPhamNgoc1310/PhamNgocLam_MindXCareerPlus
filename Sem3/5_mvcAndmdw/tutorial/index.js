import express from 'express'
import mongoose from 'mongoose';
import UsersModel from './model/user.js';

const MONGODB_URI = "mongodb+srv://phamngoclam1310:abc@mongo.2sddxi3.mongodb.net/mongo?retryWrites=true&w=majority";

await mongoose.connect(MONGODB_URI);

const app = express();

app.use(express.json());

app.get('/users', async(req, res) => {
    let users = await UsersModel.find();
    res.status(200).send(users)
})

app.post('/users', userMiddleware.validateInfo, userController.createUser)

app.post('/users',)

app.put('/users/:id', )

app.delete('/users/:id', )

app.listen(8080, ()=> {
    console.log('Server is running');
});