import { Request, Response } from 'express';
import { ProductServices } from './products.service';


// ! post product in DB

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
      const result = await ProductServices.createProductIntoDb(product);

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

const getAllProducts = async(req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductFromDB();
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

// ! get product by ID

const getProductById = async(req:Request, res:Response) => {
    try {
        const id = req.params.productId;
        const result = await ProductServices.getProductByIdFromDB(id);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

export const productController = {
  createProduct,getAllProducts,getProductById
};
