import mongoose from "mongoose";

const { Schema, model } = mongoose;

const computedFeesSchema = new Schema({
    amount: {
        type: String,
        required: [true],
        trim: true,
    },
    currency: {
        type: Number,
        required: [true],
    },
    currencyCountry: {
        type: String,
        required: [true],
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customer'
      },
      paymentEntity: {
        type: Schema.Types.ObjectId,
        ref: 'payment'
      }
  
});

export const ComputedFees = model("computedFees", computedFeesSchema);