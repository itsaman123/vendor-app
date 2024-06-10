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
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
})

const userModel:Model<IUser>=mongoose.model<IUser>('users', userSchema);
export default userModel;