
import { Request, Response } from 'express';
import ProductModel from '../models/addProductModel';
 
export async function addProducts(req: Request, res: Response) {
    try {
         const { p_id, title, name, price, discount, category, description, image, rating, review, stock } = req.body;
        const product = new ProductModel({
            p_id,
            title,
            name,
            price,
            discount,
            category,
            description,
            image,
            rating,
            review,
            stock
        })
        const result = await product.save();
        if (result) {
            res.status(201).json({ message: "Product Added Successfully" });
        }
        else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error"});
    }

}

export async function getAllProducts(req: Request, res: Response) {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}