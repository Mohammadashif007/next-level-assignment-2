import express, { Request, Response } from "express";
import { productController } from "./products.controller";
import { ProductServices } from "./products.service";

const router = express.Router();
router.post("/", productController.createProduct)
router.get("/", productController.getAllProducts)

export const ProductRoutes = router;