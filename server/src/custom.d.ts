// custom.d.ts
import { IUser } from './models/userModel'; // adjust the import based on your user model path

declare module 'express-serve-static-core' {
  interface Request {
    user?: IUser;
  }
}
