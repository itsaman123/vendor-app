import {Request, Response} from 'express'
import UserModel from '../models/userModel'
export async function getUsers(req:Request, res:Response){
    try{
        const result=await UserModel.find();
        res.status(200).json(result);
    }   
    catch(err){
        console.log(err);
        res.status(500).send('Internal server error');

    } 
}

