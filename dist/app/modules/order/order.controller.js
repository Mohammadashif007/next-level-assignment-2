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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const products_service_1 = require("../products/products.service");
const mongoose_1 = __importDefault(require("mongoose"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const orderInfo = req.body;
        yield products_service_1.ProductServices.updateProductInventory(orderInfo.productId, orderInfo.quantity, session);
        const result = yield order_service_1.OrderService.createOrderIntoDb(orderInfo, session);
        yield session.commitTransaction();
        session.endSession();
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        res.status(400).json({
            success: false,
            message: 'Insufficient quantity available in inventory',
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = email
            ? yield order_service_1.OrderService.getOrderByEmail(email)
            : yield order_service_1.OrderService.getAllOrderFromDb();
        if (!result || result.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'order not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.OrderController = {
    createOrder,
    getAllOrder,
};
