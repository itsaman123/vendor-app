
import { Request, Response } from 'express';
import ProductModel from '../models/addProductModel';

export async function addProducts(req: Request, res: Response) {
    try {
        const { p_id, title, name, price, discount, category, description, image, rating, review, stock } = req.body;
        // console.log(req.body);
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
