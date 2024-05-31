import mongoose from 'mongoose';
import { OrderModel } from './order.model';

const createOrderIntoDb = async (
  orderInfo: any,
  session: mongoose.ClientSession,
) => {
  const order = new OrderModel(orderInfo);
  await order.save({ session });
//   const result = await OrderModel.create(orderInfo);
  return order;
};

const getAllOrderFromDb = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrderByEmail = async (email: any) => {
  const result = await OrderModel.find({ email });
  if(!result){
    
  }
  return result;
};

export const OrderService = {
  createOrderIntoDb,
  getAllOrderFromDb,
  getOrderByEmail,
};
