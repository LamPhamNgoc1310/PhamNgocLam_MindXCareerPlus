import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: String,
    age: Number,
    gender: Boolean
})

const UserModel = mongoose.model('users', userSchema);
export default userSchema;