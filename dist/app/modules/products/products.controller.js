"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const products_service_1 = require("./products.service");
const products_validation_1 = __importDefault(require("./products.validation"));
// ! post product in DB
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        // ! Data validation with Zod
        const zodValidatedData = products_validation_1.default.parse(product);
        const result = yield products_service_1.ProductServices.createProductIntoDb(zodValidatedData);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// ! get all products from DB
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.searchTerm;
        const result = name
            ? yield products_service_1.ProductServices.searchProduct(name)
            : yield products_service_1.ProductServices.getAllProductFromDB();
        res.status(200).json({
            success: true,
            message: name
                ? `Products matching search term ${name} fetched successfully!`
                : 'Products fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Product not found',
        });
    }
});
// ! get product by ID
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield products_service_1.ProductServices.getProductByIdFromDB(id);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// ! Delete product from DB
const deleteProductFromDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        yield products_service_1.ProductServices.deleteProductById(id);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// ! Update product
const updateProductFromDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const updatedField = req.body;
        const result = yield products_service_1.ProductServices.updateProductById(id, updatedField);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.productController = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductFromDb,
    updateProductFromDb,
};
