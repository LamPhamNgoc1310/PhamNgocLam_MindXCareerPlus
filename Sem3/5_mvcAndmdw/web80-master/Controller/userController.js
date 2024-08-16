import userModel from '../users.js'
const userController = {
    getAllUsers: async (req, res) => {
        let users = await userModel.find();
        res.status(200).send(users);
    },

    createUser: async (req, res) => {
        let user = req.body;
        console.log(req.body);
        let result = await userModel.create(user);
        res.status(201).send(result);
    },

    updateUser: async (req, res) => {
        let newUser = req.body;
        let userId = req.params.id;
        // console.log(req.id, req.params);
        let result = await userModel.findByIdAndUpdate(userId, newUser);
        res.status(201).send(result);
    },

    deleteUser: async (req, res) => {
        let userId = req.params.id;
        // console.log(req.id, req.params);
        let result = await userModel.findByIdAndDelete(userId);
        res.status(200).send(result);
    }
}

export default userController