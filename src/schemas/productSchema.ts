import { model, Schema } from "mongoose";



const ProductSchema = new Schema({
    id: {Number, required: true},
    name: {String, required: true},
    description: {String, required: true},
    category: {String, required: true}
});

export const Product = model("Product", ProductSchema)