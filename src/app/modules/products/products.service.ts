import { TProduct } from "./products.interface"
import { ProductData } from "./products.model"

const createProductIntoDb = async(payLoad:TProduct) => {
    const result = await ProductData.create(payLoad);
    return result;
}

export const ProductServices = {
    createProductIntoDb
}