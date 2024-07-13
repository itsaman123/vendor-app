import mongoose, { Document, Schema, Model, ObjectId } from "mongoose";

interface IAddress extends Document {
    user_id:ObjectId,
    house_no: string,
    street_name: string,
    landmark: string,
    postal_code: string,
    city_district: string,
    state: string,
    phone: string,
}
const addressSchema: Schema<IAddress> = new Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    house_no:String,
    street_name: String,
    landmark: String,
    postal_code: String,
    city_district: String,
    state: String,
    phone: String
}, {
    timestamps: true
})

const AddressModel: Model<IAddress> = mongoose.model<IAddress>('user_address', addressSchema);
export default AddressModel;