import { Request, Response } from 'express';
import { ProductServices } from './products.service';

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

const getAllProducts = async(req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductFromDB();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    } catch (error) {
        
    }
}

export const productController = {
  createProduct,getAllProducts
};
