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
  const result = await ProductData.findById(id);
  return result;
};

const deleteProductById = async (id: string) => {
  const result = await ProductData.findByIdAndDelete(id);
  return result;
};

const updateProductById = async (id: string, field: any) => {
  const result = await ProductData.findOneAndUpdate({ _id: id }, field, {
    new: true,
  });
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductFromDB,
  getProductByIdFromDB,
  deleteProductById,
  updateProductById,
};
