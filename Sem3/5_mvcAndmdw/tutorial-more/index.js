import express from "express"
import mongoose from "mongoose"
import userController from "./Controllers/user.controller.js";

const MONGODB_URI = "mongodb+srv://phamngoclam1310:abc@mongo.2sddxi3.mongodb.net/mongo?retryWrites=true&w=majority";

await mongoose.connect(MONGODB_URI);

const app = express();

app.get("/users", userController.createNewUser);

app.listen(8080, () => {
    console.log("Server is running...");
    
})