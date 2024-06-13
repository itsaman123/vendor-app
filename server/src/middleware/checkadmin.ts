import { Request as ExpressRequest, Response, NextFunction } from "express";
import userModel from "../models/userModel";

interface User {
    name:string;
    email:string;
    password:string;
    isAdmin:boolean;
}

interface Request extends ExpressRequest {
  user?: User;
}

export async function adminCheck(req: Request, res: Response, next: NextFunction) {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ message: 'User is not an admin' });
  }
  next();
}
