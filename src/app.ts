import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/products/products.route';
import { OrderRouter } from './app/modules/order/order.route';
const app: Application = express();

app.use(express.json());

app.use("/api/products", ProductRoutes)

app.use("/api/orders", OrderRouter)

app.get("/", (req: Request, res: Response) => {
    res.send("Product server");
})

export default app;
