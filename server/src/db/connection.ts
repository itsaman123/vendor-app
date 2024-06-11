import mongoose from 'mongoose';

async function connectDB(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/honey_kalash_v1')
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