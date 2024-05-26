import express, { Request, Response } from "express";
import { productController } from "./products.controller";

const router = express.Router();
router.post("/", productController.createProduct)

// router.post("/", productController.createProduct)

export const ProductRoutes = router;