import key from "../apiKey.js";
import commentModel from "../Model/comment.js";
const commentController = {
    getAllComment: async (req, res) => {
        let comments = await commentModel.find();
        res.status(200).send(comments);
    },

    createComment: async (req, res) => {
        let comment = req.body;
        comment.createdAt = new Date();
        console.log(comment);
        let result = await commentModel.create(comment);
        res.status(201).send(result);
    },

    updateComment: async (req, res) => {
        let newComment = req.body;
        let commentId = req.params.id;
        // console.log(req.id, req.params);
        let result = await commentModel.findByIdAndUpdate(commentId, newComment);
        res.status(201).send(result);
    },

    // deleteComment
}

export default commentController;