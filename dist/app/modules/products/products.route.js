"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.post("/", products_controller_1.productController.createProduct);
router.get("/", products_controller_1.productController.getAllProducts);
router.get("/:productId", products_controller_1.productController.getProductById);
router.delete("/:productId", products_controller_1.productController.deleteProductFromDb);
router.put("/:productId", products_controller_1.productController.updateProductFromDb);
// router.get("/?searchTerm=iphone", productController.searchProductByQuery)
exports.ProductRoutes = router;
