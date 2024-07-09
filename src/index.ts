import express from "express";
const userRouter = require("./Routers/userRouter");


const PORT = process.env.PORT || 5000;


const app = express();
app.use(express.json());
app.use("/", userRouter)

const startApp = () => {
    app.listen(PORT, () => console.log(`server working on port: ${PORT}`))
};

startApp()