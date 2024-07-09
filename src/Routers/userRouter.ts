import {Express} from "express";
const Router = new Express.Router();
const userController = require("../Controllers/userController")


Router.get("/test", userController.getTest);



export {Router}