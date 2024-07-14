import { Schema, model } from "mongoose";
import { ICategory } from "../types/ICategory";



const CategorySchema = new Schema({
    author: {String, required: true},
    name: {String, required: true},
    number: Number
});

export const Category = model("Category", CategorySchema);

