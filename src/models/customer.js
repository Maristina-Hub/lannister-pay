import mongoose from "mongoose";

const { Schema, model } = mongoose;

const customerSchema = new Schema({
    email: {
        type: String,
        required: [true],
        unique: true,
        lowercase: true
    },
    fullName: {
        type: String,
        required: [true],
    },
    bearsFee: {
        type: Boolean,
        required: [true],
    }
  
});

export const Customer = model("customer", customerSchema);