import { OrderModel } from './order.model';

const createOrderIntoDb = async (payLoad: any) => {
  const result = await OrderModel.create(payLoad);
  return result;
};


export const OrderService = {
    createOrderIntoDb
}
