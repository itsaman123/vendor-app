import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/addProductsRoutes';
import dotenv from 'dotenv';
import connectDB from './db/connection';
dotenv.config();

const app = express();

 app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.json({
        name:"Honey Kalash",
        developer: "itsaman123",
        version: "1.0.0",
    });
});

connectDB();

app.use('/users', userRoutes)
app.use('/product', productRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
