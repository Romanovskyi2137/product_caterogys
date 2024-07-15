import { model, Schema } from "mongoose";



const ProductSchema = new Schema({
    name: {type: String, required: true, unique: true},
    category: String,
    description: String,
    price: Number,
    quantity: Number
});

export const Product = model("Product", ProductSchema)