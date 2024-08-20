import express from "express";
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json())

const secretKey = "LAM123456"
// jwt will generate a token for this user
const userData = {
    id: "123",
    username: 'john doe',
    role: 'user',
};

app.get('/getToken', (req, res) => {
    const token = jwt.sign(userData, secretKey, {
        expiresIn: 1000 * 60 * 5
    });
    res.status(200).send({
        message: 'Successfull authentication',
        data: token
    })
});

app.get("/verifyToken", (req,res) => {
    try {
        const {token} = req.body;
        const verifyToken = jwt.verify(token, secretKey);
        res.status(200).send({
            data: verifyToken,
            message: 'Success'
        })
    } catch (error) {
        res.status(400).send({
            data: null,
            message: "Check your connection"
        })
    }
})

app.listen(8080, () => {
    console.log("server is running at port 8080");
    
})