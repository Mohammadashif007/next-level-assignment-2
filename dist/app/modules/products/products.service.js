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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const products_model_1 = require("./products.model");
// ! create product
const createProductIntoDb = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductData.create(payLoad);
    return result;
});
// ! get all product
const getAllProductFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductData.find();
    return result;
});
// ! get product by id 
const getProductByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductData.findById(id);
    return result;
});
// ! delete product
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductData.findByIdAndDelete(id);
    return result;
});
// ! update by id
const updateProductById = (id, field) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductData.findOneAndUpdate({ _id: id }, field, {
        new: true,
    });
    return result;
});
// ! search by query
const searchProduct = (searchQuery) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductData.find({
        $or: [
            { name: { $regex: searchQuery, $options: 'i' } },
            // { description: { $regex: searchQuery, $options: 'i' } },
        ],
    });
    return result;
});
exports.ProductServices = {
    createProductIntoDb,
    getAllProductFromDB,
    getProductByIdFromDB,
    deleteProductById,
    updateProductById,
    searchProduct
};
