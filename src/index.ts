import express from "express";
import userRouter from "./Routers/userRouter";
import mongoose from "mongoose";
import 'dotenv/config'

const PORT = process.env.PORT || 5000;
const DB_PASSWORD: string | undefined = process.env.NODE_ENV_DB_PASSWORD;
const DB_URL = `mongodb+srv://romanovskyi2137:${DB_PASSWORD}@node-js-practice.dl3l1b2.mongodb.net/?retryWrites=true&w=majority&appName=node-js-practice`

const app = express();

app.use(express.json());
app.use("/", userRouter);   

const  startApp = async () => {
    try {
        await mongoose.connect(DB_URL, {});
        app.listen(PORT, () => console.log(`server working on port: ${PORT}`))   
    } catch (e) {
        console.log(e);
        
    }
};

startApp()  