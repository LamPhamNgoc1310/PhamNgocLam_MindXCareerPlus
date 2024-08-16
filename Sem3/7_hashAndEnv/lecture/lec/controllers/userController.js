import userModel from "../models/users.schema.js"
import bcrypt from "bcrypt";

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
    },

    register: async (req, res) => {
        let userInfo = req.body;
        let salt = bcrypt.genSaltSync();
        // merging our real password (decrypted) with salt (decrypted)
        let hashedPassword = bcrypt.hashSync(userInfo.password, salt);
        let result = await userModel.create({
            userName: userInfo.userName,
            password: hashedPassword
        })
        res.status(201).send(
            {
                result: result,
                data: {
                    userName: userInfo.userName,
                    password: hashedPassword
                }
            }
        )
    },

    login: async(req, res) => {
        let userInfo = req.body;
        let currentUser = userModel.findOne({userName});
        if(!currentUser) {
            res.status(404).send("userName not found!");
        } else {
            let isCorrectPw = bcrypt.compareSync(userInfo.password);
            if (!isCorrectPw) {
                res.status(401).send('Wrong password!')
            } else {
                res.status(200).send({
                    message: "Login succesfully",
                    data: currentUser
                })
            }
        }
    }
}

export default userController