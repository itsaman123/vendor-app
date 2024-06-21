import mongoose, {Document, Schema, Model} from 'mongoose'

interface IAddProducts extends Document{
    p_id:number,
    title:string,// 
    name:string, //
    price:number, //
    discount:number, //
    category:string, //
    description:string, //
    size:string, //
    image:string, //
    rating:number, //
    review:number,
    stock:number, //
    created_at:Date,
    updated_at:Date
}

const productSchema:Schema<IAddProducts>=new Schema({
    p_id:{
        type: Number, 
    },
    title:{
        type: String, 
    },
    name:{
        type: String, 
    },
    price:{
        type: Number, 
    },
    discount:{
        type: Number, 
    },
    category:{
        type: String, 
    },
    description:{
        type: String, 
    },
    image:{
        type: String, 
    },
    size:{
        type: String, 
    },
    rating:{
        type: Number, 
    },
    review:{
        type: Number, 
    },
    stock:{
        type: Number, 
    },

},{
    timestamps:true
})


const ProductModel:Model<IAddProducts>=mongoose.model('products', productSchema);
export default ProductModel;