import mongoose from "mongoose";

let commentSchema = new mongoose.Schema({
    postId: String,
    createdAt: Date,
    userId: String,
    content: String,
})

const commentModel = mongoose.model('comment', commentSchema);

export default commentModel