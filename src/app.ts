import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/products/products.route';
const app: Application = express();

app.use(express.json());

app.use('/api/products', ProductRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Product server");
})

export default app;
