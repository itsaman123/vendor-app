import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
