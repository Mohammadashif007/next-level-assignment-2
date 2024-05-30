import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async(req: Request, res: Response) => {
    try {
        const orderInfo = req.body;
        const result = await OrderService.createOrderIntoDb(orderInfo);
        res.status(200).json({
            success: true,
            message: "Order created successfully",
            data: result
        })

    } catch (error) {
        console.log(error);
    }
}


export const OrderController = {
    createOrder
}