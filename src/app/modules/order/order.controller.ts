import { Request, Response } from 'express';
import { OrderService } from './order.service';
import { ProductServices } from '../products/products.service';
import mongoose from 'mongoose';
import orderValidationSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const orderInfo = req.body;
    const validatedOrderInfo = orderValidationSchema.parse(orderInfo);
    await ProductServices.updateProductInventory(
      validatedOrderInfo.productId,
      validatedOrderInfo.quantity,
      session,
    );
    const result = await OrderService.createOrderIntoDb(
      validatedOrderInfo,
      session,
    );
    await session.commitTransaction();
    session.endSession();
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    res.status(400).json({
      success: false,
      message: 'Insufficient quantity available in inventory',
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    const result = email
      ? await OrderService.getOrderByEmail(email)
      : await OrderService.getAllOrderFromDb();
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'order not found',
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
};
