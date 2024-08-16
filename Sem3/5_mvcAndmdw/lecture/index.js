import express from 'express'
import mongoose from 'mongoose';
import UsersModel from './model/user.schema.js';

const MONGODB_URI = "mongodb+srv://phamngoclam1310:abc@mongo.2sddxi3.mongodb.net/mongo?retryWrites=true&w=majority";

await mongoose.connect(MONGODB_URI);

const app = express();

app.use(express.json());

app.get('/api/v1/users', usersController.createNewUser);

app.post('/api/v1/users', usersController.createNewUser);

app.listen(8080, ()=> {
    console.log('Server is running');
});