import express from "express"
import userController from "../Controllers/userController";

const router = express.Router();


router.get("/test", userController.getTest);
router.get("/category/:name", () => {});
router.post("/category/create", userController.createCategory);
router.delete("/category/delete/:_id", userController.deleteCategory);


router.post("/product/create", userController.createProduct);
router.delete("/product/delete/:_id", userController.deleteProduct);



export default router