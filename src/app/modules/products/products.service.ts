import { TProduct } from './products.interface';
import { ProductData } from './products.model';

const createProductIntoDb = async (payLoad: TProduct) => {
  const result = await ProductData.create(payLoad);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await ProductData.find();
  return result;
};

const getProductByIdFromDB = async (id: string) => {
    console.log(id);
  const result = await ProductData.findById(id);
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductFromDB,
  getProductByIdFromDB,
};
