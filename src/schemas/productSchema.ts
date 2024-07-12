import { Schema } from "mongoose";
import { IProduct } from "../types/IProduct";



const ProductSchema = new Schema<IProduct>({
    name: String,
    description: String
})