import mongoose, { Schema } from "mongoose";
import { createHmac } from 'crypto';

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    img: {
        type: String,
        default: ""
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

userSchema.methods = {
    authencated(password) {
        try {
            return this.password == this.encrytPassword(password);
        } catch (error) {
            console.log(error);
        }

    },
    encrytPassword(password) {
        if (!password) return
        try {
            return createHmac('sha256', 'abcs').update(password).digest('hex');
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre('save', function(next) {
    try {
        this.password = this.encrytPassword(this.password);
        next()
    } catch (error) {
        console.log(error);
    }
})

export default mongoose.model('User', userSchema)