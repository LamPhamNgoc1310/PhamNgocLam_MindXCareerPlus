import UsersModel from "../model/user.schema"


const usersController = {
    getListUser: async(req, res) => {
        const listUser = await UsersModel.find();
        res.status(200).send({
            data: listUser,
            message: 'success',
            success: true
        });
    }
}

export default usersController