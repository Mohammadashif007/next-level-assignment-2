import { Request, Response } from 'express';
import { ProductServices } from './products.service';
import productValidationSchema from './products.validation';

// ! post product in DB

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    // ! Data validation with Zod

    const zodValidatedData = productValidationSchema.parse(product);

    const result = await ProductServices.createProductIntoDb(zodValidatedData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// ! get all products from DB

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const name = req.query.searchTerm as string;
    const result = name
      ? await ProductServices.searchProduct(name)
      : await ProductServices.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: name
        ? `Products matching search term ${name} fetched successfully!`
        : 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product not found',
    });
  }
};

// ! get product by ID

const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await ProductServices.getProductByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// ! Delete product from DB

const deleteProductFromDb = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    await ProductServices.deleteProductById(id);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};

// ! Update product

const updateProductFromDb = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const updatedField = req.body;
    const result = await ProductServices.updateProductById(id, updatedField);
    if (!result) {
      return res.status(500).json({
        success: false,
        message: 'something went wrong!',
        data: result,
      });
    }
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductFromDb,
  updateProductFromDb,
};
