import { OrderModel } from './order.model';

const createOrderIntoDb = async (payLoad: any) => {
  const result = await OrderModel.create(payLoad);
  return result;
};

const getAllOrderFromDb = async() => {
    const result = await OrderModel.find();
    return result;
} 


export const OrderService = {
    createOrderIntoDb,
    getAllOrderFromDb
}
