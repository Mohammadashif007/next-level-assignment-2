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
    const result = await ProductServices.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// ! get product by ID

const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    console.log(id);
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
        const result = ProductServices.deleteProductById(id)
        res.status(200).json({
          success: true,
          message: "Product deleted successfully!",
          data: null
        })
    } catch (error) {
        
    }
}

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductFromDb
};
