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
            res.status(200).json({newCategory: data, message: "success"})
        } catch (e) {
            res.status(400).json(e)
        }
    };
    async deleteCategory (req: Request, res: Response) {
        try {
            const _id: string = req.params._id;
            const result = await Category.findByIdAndDelete(_id);
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
            res.status(200).json({newProduct: data, message: "success"})
        } catch (e) {            
            res.status(400).json(e)
        }
    };
    async deleteProduct (req: Request, res: Response) {
        try {
            const _id: string = req.params._id;
            const result = await Product.findByIdAndDelete(_id);
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