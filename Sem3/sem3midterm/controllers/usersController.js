import userModel from "../models/users.schema.js";

const usersController = {
  getAllUsers: async (req, res) => {
    let users = await userModel.find();
    res.status(200).send(users);
  },

  createUser: async (req, res) => {
    let user = req.body;
    let result = await userModel.create(user);
    res.status(200).send(result);
  },

  updateUser: async (req, res) => {
    let newUser = req.body;
    let userId = req.params.id;
    let result = await userModel.findByIdAndUpdate(userId, newUser);
    res.status(200).send(result);
  },

  deleteUser: async (req, res) => {
    let userId = req.params.id;
    let result = await userModel.findByIdAndDelete(userId);
    res.status(200).send(result);
  },

  // login: async (req, res) => {
  //   let userId = req.params._id;
  //   let currentUser = userModel.findById({ userId });
  //   if (!currentUser) {
  //     res.status(404).send("username not found");
  //   } else {
  //     let isCorrectPw = userInfo.password;
  //     if (!isCorrectPw) {
  //       res.status(401).send("Wrong password");
  //     } else {
  //       res.status(200).send({
  //         message: "Login Successfully",
  //         data: currentUser,
  //       });
  //     }
  //   }
  // },
  login: async (req, res) => {
    const userId = req.params.id;

    try {
      const user = await userModel.findById(userId);
      const { name, password } = req.body;

      if (!user) {
        res.status(404).send("Wrong name or password");
      }

      if (user.name === name && user.password === password) {
        res.status(200).send(`Logged in as ${user.name}`);
      }

      else {
        res.status(401).send("Wrong credentials");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(`An error occured: ${error}`);
    }
  },

  
  logout: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await userModel.findById(userId);
      res.status(200).send(user.name + " logged out.");
    } catch (error) {
      res.status(500).send(`An error occured: ${error}`);
    }
  },
};

export default usersController;
