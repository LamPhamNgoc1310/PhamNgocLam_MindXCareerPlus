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

app.post('/users', async(req, res)=> {
    let user = req.body;
    let result = await UsersModel.create(user);
    res.status(200).send(result)
})

app.put('/users/:id', async(req, res) => {
    let newUser = req.body;
    let userId = req.params.id;
    let result = await UsersModel.findByIdAndUpdate(userId, newUser);
    res.status(201).send(result);
})

app.delete('/users/:id', async(req, res) => {
    let newUser = req.body;
    let userId = req.params.id;
    let result = await UsersModel.findByIdAndDelete(userId, newUser);
    res.status(201).send(result);
})

app.listen(8080, ()=> {
    console.log('Server is running');
});