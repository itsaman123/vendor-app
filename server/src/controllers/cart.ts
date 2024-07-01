import { Request, Response } from 'express';
import CartModel from '../models/cardModel';
export async function saveCartDetails(req: Request, res: Response) {
    try {
        const { user_id, p_id, title, name, price, discount, quantity, description, size, image, rating, review, delivery_fee } = req.body;
        const details = new CartModel({
            user_id, p_id, title, name, price, discount, quantity, description, size, image, rating, review, delivery_fee
        });
        const result = await details.save();
        if (!result) {
            res.status(400).send({ message: "Bad Request" });
        }
        res.status(201).send({ message: "Added to the cart" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

export async function getCartDetails(req: Request, res: Response) {
    try {
         const result = await CartModel.find();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}
export async function deleteCartDetails(req: Request, res: Response) {
    try {
        const { id }: any = req.params.id;
        const p_id=req.body.item_id;
        const result = await CartModel.deleteOne({p_id:p_id});
         res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}