import userModel from "../models/users.schema.js"

const userController = {
    getAllUsers: async (req, res) => {
        let users = await userModel.find();
        res.status(200).send(users);
    },

    createUser: async (req, res) => {
        let user = req.body;
        // creating a new user as a result then send it to MongoDB
        let result = await userModel.create(user)
        res.status(200).send(result);
    },

    updateUser: async (req, res) => {
        let newUser = req.body;
        // this is where you get the id on the URL bar
        let userId = req.params.id;
        let result = await userModel.findByIdAndUpdate(userId, newUser);
        res.status(200).send(result);
    },

    deleteUser: async (req, res) => {
        // this is where you get the id on the URL bar
        // user id of the one you want to delete
        let userId = req.params.id;
        let result = await userModel.findByIdAndDelete(userId);
        res.status(200).send(result);
    }
}

export default userController