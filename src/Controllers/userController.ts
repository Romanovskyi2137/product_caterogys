import { Response,  Request } from "express";
import { Category } from "../schemas/categorySchema";
import { ICategory } from "../types/ICategory";
import { IProduct } from "../types/IProduct";
import { Product } from "../schemas/productSchema";

type CategoryCreateReq = Request & {body: ICategory};
type ProductCreateReq = Request & {body: IProduct};

class UserController {
    getTest (req: Request, res: Response) {
        res.status(200).json("some response")
    }
    async createCategory (req: CategoryCreateReq, res: Response) {
        try {
            const category = new Category({
                author: req.body.author,
                name: req.body.name
            });
            await category.save()
        } catch (e) {
            res.status(400).json(e)
        }
    };
    async createProduct (req: ProductCreateReq, res: Response) {
        try {
            const product = new Product({
                name: req.body.name
                
            })
        } catch (e) {
            res.status(400).json(e)
        }
    }
}

export default new UserController