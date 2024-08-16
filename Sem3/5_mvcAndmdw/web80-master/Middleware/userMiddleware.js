const userMiddleware = {
    validateInfo: (req, res, next) => {
        // let {username, password} = req.body;
        // if (!username) {
        //     res.status(403).send({
        //         message: 'Chưa nhập username'
        //     })
        // } else {
        //     next();
        // }
        next();
    }
}

export default userMiddleware