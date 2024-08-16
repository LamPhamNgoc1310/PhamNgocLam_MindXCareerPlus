import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: Boolean
})

const userModel = mongoose.model('users', userSchema);

export default userModel;