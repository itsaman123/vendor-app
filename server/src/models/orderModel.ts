import mongoose, {Document, Schema, Model, ObjectId} from 'mongoose'

interface Order extends Document{
    user_id:ObjectId,
    p_id:number,
    title:string,
    name:string, 
    price:number, 
    discount:number,
    quantity:number, 
    description:string, 
    size:string, 
    image:string, 
    rating:number, 
    review:number,
    delivery_fee:string,
    order_date:Date

}

const orderSchema:Schema<Order>= new Schema({
    user_id:mongoose.Schema.Types.ObjectId, 
    p_id:Number,
    title:String,
    name:String,
    price:Number,
    discount:Number,
    quantity:Number,
    description:String,
    size:String,
    image:String,
    rating:Number,
    review:Number,
    delivery_fee:String,
    order_date:Date

},{
    timestamps:true
})

const OrderModel:Model<Order>=mongoose.model('orders', orderSchema)
export default OrderModel;