import mongoose from "mongoose";

const { Schema, model } = mongoose;

const paymentSchema = new Schema({
    issuer: {
        type: String,
        required: [true]
    },
    brand: {
        type: String,
        required: [true]
    },
    cardNumber: {
        type: Number,
        required: [true]
    },
    sixID: {
        type: Number,
        required: [true]
    },
    Type: {
        type: String,
        required: [true],
        enum: [
            'CREDIT-CARD', 
            'DEBIT-CARD', 
            'BANK-ACCOUNT', 
            'USSD', 
            'WALLET-ID'
        ]
    },
    country: {
        type: String,
        required: [true]
    }
  
});

export const Payment = model("payment", paymentSchema);