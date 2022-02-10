import { ComputedFees } from "../models/feesComputation.js";

export const FeesController = {
    
    createFees: async (req, res) => {
    const { unique_id, currency, feeType, feeValue , type, feeLocal, feeEntity, entityProperty} = req.body;
    

    try {
        if (!unique_id || !currency || !feeType || !feeValue || !type|| !feeLocal|| !feeEntity || !entityProperty) {
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
            .json({ status: 'success', message: 'successful', data: {unique_id, currency, feeType, feeValue , type, feeLocal, feeEntity, entityProperty } });
        } catch (err) {
        return res
            .status(500)
            .json({ status: 'fail', message: 'server err', err });
        }
    }
}