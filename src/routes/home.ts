import { getUsers } from "../database";
import { Router } from "express";

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const users = await getUsers()


    return res.status(200).json({ users });
})

export default homeRouter