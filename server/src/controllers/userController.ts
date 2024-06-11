import {Request, Response} from 'express'
import UserModel from '../models/userModel'
import bcrypt from 'bcryptjs'

export async function getUsers(req:Request, res:Response): Promise<void>{
    try{
        const result=await UserModel.find();
        res.status(200).json(result);
    }   
    catch(err){
        console.log(err);
        res.status(500).send({error:'Internal server error'});

    } 
}

export async function registerUser(req:Request, res:Response){
    try{
        const {name, email, password}:{name:string, email:string, password:string}=req.body;
        const salt:string=bcrypt.genSaltSync(10);
        const hashedPassword: string=bcrypt.hashSync(password, salt);
        const userdetails=new UserModel({
            name, 
            email,
            password:hashedPassword
        })
        
        const data=await userdetails.save();
        if(!data._id){
            res.status(400).json({error:"User registration failed"});
        }
        res.status(201).json({message:"User registered successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).send({error:'Internal server error'});

    }
}

export async function loginUsers(req:Request, res:Response){
    try{
        const {email, password}:{email:string, password:string}=req.body;
        const findemail=await UserModel.findOne({email});
        if(!findemail){
            res.status(400).json({error:"User not found"});
        }
        const isMatch:boolean=bcrypt.compareSync(password, findemail?.password ?? '');
        if(!isMatch){
            res.status(400).json({error:"Invalid password"});
        }
        res.status(200).json({message:"Login Successfull", data:findemail})
        
    }
    catch(error){
        console.log(error);
        res.status(500).send({error:'Internal server error'});

    }
}



 