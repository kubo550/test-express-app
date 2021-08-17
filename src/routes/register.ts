import { createUser, deleteUsers } from "../database";
import { Router } from "express";


const registerRouter = Router()

registerRouter.post('/', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ message: 'invalid username or password', user: null });
    }

    const user = await createUser(username, password);
    res.status(201).json({ user })

})

registerRouter.delete('/', async (req, res) => {
    const { password } = req.body;

    if (!password || password !== process.env.DB_PASSWORD) {
        return res.status(401).json({ message: `you have no permissions, ${process.env.DB_PASSWORD}` })
    }

    const deleted = await deleteUsers()

    return res.status(200).json({ deleted })
})

export default registerRouter