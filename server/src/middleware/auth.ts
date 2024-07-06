import jwt from 'jsonwebtoken';
import { Request as ExpressRequest, Response, NextFunction } from 'express';
import userModel from '../models/userModel';

interface User {
    name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
}

interface Request extends ExpressRequest {
    user?: User;
}

interface JwtPayload {
    userId: string;
}

export async function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
     if (!token) {
        return res.status(401).json({ message: 'Authentication Required' });
    }
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY ?? '') as JwtPayload;
        const userdata = await userModel.findById(decodedToken.userId);
        if (!userdata) {
            return res.status(404).json({ message: 'User Not Found' });
        }
        req.user = userdata;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Invalid Token' });
    }
}
