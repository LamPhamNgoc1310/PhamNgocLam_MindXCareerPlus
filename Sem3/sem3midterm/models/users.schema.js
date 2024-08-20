import mongoose from "mongoose";

let usersSchema = new mongoose.Schema({
    name: String,
    dob: String,
    birthplace: String,
    nationality: String,
    education: String,
    password: String
})

const userModel = mongoose.model('user', usersSchema);

export default userModel;