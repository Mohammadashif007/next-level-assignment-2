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
exports.OrderService = void 0;
const order_model_1 = require("./order.model");
const createOrderIntoDb = (orderInfo, session) => __awaiter(void 0, void 0, void 0, function* () {
    const order = new order_model_1.OrderModel(orderInfo);
    yield order.save({ session });
    //   const result = await OrderModel.create(orderInfo);
    return order;
});
const getAllOrderFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find();
    return result;
});
const getOrderByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find({ email });
    return result;
});
exports.OrderService = {
    createOrderIntoDb,
    getAllOrderFromDb,
    getOrderByEmail,
};
