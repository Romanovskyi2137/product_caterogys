import { model, Schema } from "mongoose";
import { IProduct } from "../types/IProduct";



const ProductSchema = new Schema<IProduct>({
    name: String,
    description: String,
    category: String
});

export const Product = model("Product", ProductSchema)