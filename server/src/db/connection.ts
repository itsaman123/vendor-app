import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI ?? '')
        .then(()=>{
            console.log("Connected to database")
        })
        .catch((error)=>{
            console.log(error);
        })

    }
    catch(error){
        console.log(error)
    }
}

export default connectDB;