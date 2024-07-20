import { Category } from "../../schemas/categorySchema";
import { Product } from "../../schemas/productSchema";
import { ICategory } from "../../types/ICategory";
import { IProduct } from "../../types/IProduct";


class UserServise {
    async createCategory (body: ICategory) {
        const data = {
            author: body.author,
            name: body.name,
            products: body.products || []
        };
        const category = new Category(body);
        await category.save();
        return data
    };
    async deleteCategory (_id: string) {
        return await Category.findByIdAndDelete(_id);
    };
    async createProduct (body: IProduct) {
        const data = {
            name: body.name,
            category: body.category || null,
            description: body.description || null,
            price: body.price || null,
            quantity: body.quantity || null
        };
        const product = new Product(data);
        await product.save();
        return data
    };
    async deleteProduct (_id: string) {
        return await Product.findByIdAndDelete(_id);
    }
};

export default new UserServise