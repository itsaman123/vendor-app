
import { Request, Response } from 'express';
import ProductModel from '../models/addProductModel';
import {Upload} from '../helper/upload';

export async function addProducts(req: Request, res: Response) {
    try {
        const { title, name, price, discount, category, description, rating, review, stock } = req.body;

        const result = await Upload(req.file?.path);

        const product = new ProductModel({
            title,
            name,
            price,
            discount,
            category,
            description,
            image: result?.secure_url,
            rating,
            review,
            stock
        });

        const savedProduct = await product.save();
        res.status(201).json({ message: "Product Added Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
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
export async function getProductsById(req: Request, res: Response) {
    try {
        // console.log(req.params);
        const { id }: any = req.params;
        const result = await ProductModel.findOne({ _id: id });
        // console.log(result)
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export async function deleteProductsById(req: Request, res: Response) {
    try {
        const { id }: any = req.params;
        const result = await ProductModel.findByIdAndDelete(id);
        res.status(200).send({ message: "Data deleted Successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
 
 
export async function searchProducts(req: Request, res: Response) {
    try {
        const { keyword } = req.body;
        
        // Validate the input
        if (!keyword) {
            return res.status(400).json({ message: "Keyword is required" });
        }

        // Search products by description
        const products = await ProductModel.find({
            description: { $regex: keyword, $options: 'i' }
        });
        if(!products){
            return res.status(404).json("Product not found");
        
        }

        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
