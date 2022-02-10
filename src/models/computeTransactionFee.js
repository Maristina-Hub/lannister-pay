import mongoose from "mongoose";

const { Schema, model } = mongoose;

const computeTransactionFeeSchema = new Schema({
    unique_id: {
        type: String,
        required:[false]
    },
    currency: {
        type: String,
        required: [true],
        trim: true,
    },
    feeType: {
        type: String,
        required: [true],
    },
    feeValue: {
        type: String,
        required: [true],
    },
    type: {
        type: String,
        required: [true],
        trim: true,
    },
    feeLocal: {
        type: String,
        required: [true],
    },
    feeEntity: {
        type: Number,
        required: [true],
    }, 
    entityProperty: {
        type: String,
        required: [true],
    }
    
});

export const ComputeTransactionFee = model("computeTransactionFee", computeTransactionFeeSchema);