import { Schema, model } from "mongoose";
import { ICategory } from "../types/ICategory";



const CategorySchema = new Schema<ICategory>({
    author: String,
    name: String
});

export const Category = model("Category", CategorySchema);

