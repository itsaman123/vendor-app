import mongoose, {Document, Schema, Model} from "mongoose";

interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    isAdmin:boolean;
}
const userSchema: Schema<IUser>=new Schema({
    name:{
        type:String,
  
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

const userModel:Model<IUser>=mongoose.model<IUser>('users', userSchema);
export default userModel;