import { TProduct } from "./products.interface"
import { ProductData } from "./products.model"

const createProductIntoDb = async(payLoad:TProduct) => {
    const result = await ProductData.create(payLoad);
    return result;
}

const getAllProductFromDB = async() => {
    const result = await ProductData.find();
    return result;
}

export const ProductServices = {
    createProductIntoDb,getAllProductFromDB
}