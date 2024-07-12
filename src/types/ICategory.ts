import { IProduct } from "./IProduct"

export interface ICategory {
    _id?: string
    name: string
    author: string
    products?: IProduct[]
}