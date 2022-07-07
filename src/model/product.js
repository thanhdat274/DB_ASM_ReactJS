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
    quantity: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        default: ""
    },
    desc: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    categoryId: {
        type: ObjectId,
        ref: 'Category'
    }
}, { timestamps: true });
export default mongoose.model('Product', ProductSchema)