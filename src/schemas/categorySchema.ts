import { Schema, model } from "mongoose";



const CategorySchema = new Schema({
    name: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    products: Array
});

export const Category = model("Category", CategorySchema);

