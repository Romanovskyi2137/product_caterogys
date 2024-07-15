import express from "express"
import userController from "../Controllers/userController";

const router = express.Router();


router.get("/test", userController.getTest);

router.post("/category/create", userController.createCategory);
router.post("/product/create", userController.createProduct)



export default router