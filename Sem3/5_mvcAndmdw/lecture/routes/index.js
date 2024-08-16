import {Router} from "express"
import UserRouter from "./users.js"

const RootRouterV1 = Router()

RootRouterV1.use('/users', UserRouter);

export default RootRouterV1;