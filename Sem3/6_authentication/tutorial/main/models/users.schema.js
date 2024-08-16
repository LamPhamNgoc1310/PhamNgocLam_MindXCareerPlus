import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    userName: String,
    age: Number,
    gender: Boolean,
})

const userModel = mongoose.model('user', userSchema);

export default userModel