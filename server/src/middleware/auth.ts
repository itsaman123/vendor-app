import jwt from "jsonwebtoken";
import userModel from "../models/userModel";
import { Request, Response, NextFunction } from "express";

interface JwtPayload {
    userId: string;
  }

export async function authenticate(req:Request,res:Response,next:NextFunction){
    const token=req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:'Authentication Required'});
    }
    try{
        const decodeToken=jwt.verify(token, process.env.SECRET_KEY??'') as JwtPayload
        const user=await userModel.findById(decodeToken.userId);
        if(!user){
            return res.status(404).json({message:'User Not Found'});
        }
        req.user=user;
        next();
    }
    catch(error){
         return res.status(500).json({message:"Invalid Token"});
    }
}