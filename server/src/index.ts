import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
import { version } from 'os';
dotenv.config();

const app = express();

 app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.json({
        name:"Honey Kalash",
        target:"build under 2 months",
        version: "1.0.0",
    });
});

 
app.use('/users', userRoutes)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
