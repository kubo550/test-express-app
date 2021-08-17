import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv"

const createApp = () => {
    const app = express();

    dotenv.config();

    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors());

    return app
}

export default createApp