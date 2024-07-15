import { Response,  Request } from "express";
import { Category } from "../schemas/categorySchema";
import { ICategory } from "../types/ICategory";
import { IProduct } from "../types/IProduct";
import { Product } from "../schemas/productSchema";


class UserController {
    getTest (req: Request, res: Response) {
        res.status(200).json("some response")
    }
    async createCategory (req: Request, res: Response) {
        const body: ICategory = req.body;
        const data: ICategory = {
            author: body.author,
            name: body.name,
            products: body.products || []
        };
        try {
            const category = new Category(data);
            await category.save();
            res.status(200).json({data, message: "success"})
        } catch (e) {
            res.status(400).json(e)
        }
    };
    async createProduct (req: Request, res: Response) {
        const body: IProduct = req.body;
        const data: IProduct = {
            name: body.name,
            category: body.category || null,
            description: body.description || null,
            price: body.price || null,
            quantity: body.quantity || null
        }
        try {
            const product = new Product(data);
            await product.save()
            res.status(200).json({data, message: "success"})
        } catch (e) {            
            res.status(400).json(e)
        }
    }
}

export default new UserController