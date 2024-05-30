import { TProduct } from './products.interface';
import { ProductData } from './products.model';


// ! create product

const createProductIntoDb = async (payLoad: TProduct) => {
  const result = await ProductData.create(payLoad);
  return result;
};

// ! get all product

const getAllProductFromDB = async () => {
  const result = await ProductData.find();
  return result;
};

// ! get product by id 

const getProductByIdFromDB = async (id: string) => {
  const result = await ProductData.findById(id);
  return result;
};

// ! delete product

const deleteProductById = async (id: string) => {
  const result = await ProductData.findByIdAndDelete(id);
  return result;
};

// ! update by id

const updateProductById = async (id: string, field: any) => {
  const result = await ProductData.findOneAndUpdate({ _id: id }, field, {
    new: true,
  });
  return result;
};

// ! search by query

const searchProduct = async (searchQuery: string) => {
  const result = await ProductData.find({
    $or: [
      { name: { $regex: searchQuery, $options: 'i' } },
      // { description: { $regex: searchQuery, $options: 'i' } },
    ],
  });
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductFromDB,
  getProductByIdFromDB,
  deleteProductById,
  updateProductById,
  searchProduct
};
