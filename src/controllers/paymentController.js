import { Payment } from "../models/paymentEntity.js";

export const PaymentController = {
    createCustomer: async (req, res) => {
    const { issuer, brand, cardNumber, sixID, cardType, country } = req.body;
    

    try {
        if (!issuer || !brand || !sixID|| !cardNumber || !cardType || !country) {
        return res
            .status(400)
            .json({ status: 'fail', message: 'Please fill all fields' });
        }

        const newPayment= new Payment(req.body);
        const payment = await newPayment.save();
        if (!payment) {
            return res
            .status(400)
            .json({ status: 'fail', message: 'something went wrong' });
        }
        return res
            .status(200)
            .json({ status: 'success', message: 'successful', data: { issuer, brand, cardNumber, sixID, cardType, country} });
        } catch (err) {
        return res
            .status(500)
            .json({ status: 'fail', message: 'server err', err });
        }
    }
}