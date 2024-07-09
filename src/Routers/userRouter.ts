import express from "express"
import userController from "../Controllers/userController";

const router = express.Router();


router.get("/test", userController.getTest);



export default router