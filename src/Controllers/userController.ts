import { Response,  Request } from "express";
import { ICategory } from "../types/ICategory";
import { IProduct } from "../types/IProduct";
import userServise from "./Servises/userServise";


class UserController {
    getTest (req: Request, res: Response) {
        res.status(200).json("some response")
    }
    async createCategory (req: Request, res: Response) {
        const body: ICategory = req.body;
        try {
            const data = userServise.createCategory(body)
            res.status(200).json({newCategory: data, message: "success"})
        } catch (e) {
            res.status(400).json(e)
        }
    };
    async deleteCategory (req: Request, res: Response) {
        try {
            const _id: string = req.params._id;
            const result = await userServise.deleteCategory(_id)
            if (result === null) {
                res.status(400).json({message: "this category does not exist"});
                return
            };
            res.status(200).json({message: "success", result})
        } catch (e) {
            res.status(400).json(e)
        }
    };
    async createProduct (req: Request, res: Response) {
        const body: IProduct = req.body;
        try {
            const data = await userServise.createProduct(body);
            res.status(200).json({newProduct: data, message: "success"})
        } catch (e) {            
            res.status(400).json(e)
        }
    };
    async deleteProduct (req: Request, res: Response) {
        try {
            const _id: string = req.params._id;
            const result = await userServise.deleteProduct(_id);
            if (result === null) {
                res.status(400).json({message: "this product does not exist"});
                return
            };
            res.status(200).json({message: "success", deletedProduct: result})
        } catch (e) {
            res.status(400).json(e)
        }
    }
}

export default new UserController