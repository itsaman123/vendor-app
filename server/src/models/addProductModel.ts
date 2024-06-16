import mongoose, {Document, Schema, Model} from 'mongoose'

interface IAddProducts extends Document{
    p_id:number,
    title:string,
    name:string,
    price:number,
    discount:number,
    category:string,
    description:string,
    image:string,
    rating:number,
    review:number,
    stock:number,
    created_at:Date,
    updated_at:Date
}

const productSchema:Schema<IAddProducts>=new Schema({
    p_id:{
        type: Number,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    discount:{
        type: Number,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    rating:{
        type: Number,
        required:true
    },
    review:{
        type: Number,
        required:true
    },
    stock:{
        type: Number,
        required:true
    },

},{
    timestamps:true
})


const ProductModel:Model<IAddProducts>=mongoose.model('products', productSchema);
export default ProductModel;