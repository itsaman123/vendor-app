import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/addProductsRoutes';
import cartRoutes from './routes/cart'
import orderRoutes from './routes/order'
import dotenv from 'dotenv';
import connectDB from './db/connection';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions={
    // origin:"http://localhost:3000",
    origin:"https://vendor-app-umber.vercel.app",
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
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
app.use('/cart', cartRoutes)
app.use('/order', orderRoutes)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
