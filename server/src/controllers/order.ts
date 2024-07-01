import { Request, Response } from 'express';
import OrderModel from '../models/orderModel';
export async function saveOrderDetails(req: Request, res: Response) {
    try {
         
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

export async function getOrderDetails(req: Request, res: Response) {
    try {
         
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}