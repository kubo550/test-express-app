import createApp from "./app";
import { homeRouter, registerRouter } from "./routes";

const app = createApp();

app.use("/", homeRouter);

app.use('/register', registerRouter)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}...`));
