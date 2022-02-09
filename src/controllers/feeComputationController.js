import { ComputedFees } from "../models/feesComputation.js";

export const FeesController = {
    createFees: async (req, res) => {
    const { amount, currency, currencyCountry, customer , paymentEntity} = req.body;
    

    try {
        if (!amount || !currency || !currencyCountry|| !customer || !paymentEntity) {
        return res
            .status(400)
            .json({ status: 'fail', message: 'Please fill all fields' });
        }

        const newComputedFees = new ComputedFees(req.body);
        const computedFee = await newComputedFees.save();
        if (!computedFee) {
            return res
            .status(400)
            .json({ status: 'fail', message: 'something went wrong' });
        }
        return res
            .status(200)
            .json({ status: 'success', message: 'successful', data: { amount, currency, currencyCountry, customer , paymentEntity } });
        } catch (err) {
        return res
            .status(500)
            .json({ status: 'fail', message: 'server err', err });
        }
    }
}