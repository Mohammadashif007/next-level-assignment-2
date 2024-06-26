import express from 'express';
import { productController } from './products.controller';

const router = express.Router();
router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.delete('/:productId', productController.deleteProductFromDb);
router.put('/:productId', productController.updateProductFromDb);
// router.get("/?searchTerm=iphone", productController.searchProductByQuery)

export const ProductRoutes = router;
