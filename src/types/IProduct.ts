import { Product } from "../schemas/productSchema"


export interface IProduct {
    _id?: number
    name: string
    category: string
    description?: string
    price?: number
    quantity?: number
}