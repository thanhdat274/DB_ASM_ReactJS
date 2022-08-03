import mongoose, { ObjectId } from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sale_price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    desc_img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    cateId:{
        type: ObjectId,
        ref: 'Category'
    }
}, { timestamps: true });
export default mongoose.model('Product', ProductSchema)