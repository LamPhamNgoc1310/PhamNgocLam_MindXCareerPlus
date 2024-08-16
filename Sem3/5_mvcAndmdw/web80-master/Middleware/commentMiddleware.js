import commentModel from "../Model/comment.js";

const commentMiddleware = {
    validateUserPermission: async (req, res, next) => {
        let {id, userId} = req.params;
        let comment = await commentModel.findById(id);
        console.log(comment, userId);
        if (comment && comment.userId == userId) {
            next();
        } else {
            res.status(403).send({
                message: 'user này không có quyền sửa comment này',
            })
        }
    }
}

export default commentMiddleware;