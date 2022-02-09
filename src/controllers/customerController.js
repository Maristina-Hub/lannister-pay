import { Customer } from "../models/customer.js";

export const CustomerController = {
    createCustomer: async (req, res) => {
    const { email, fullName, bearsFee } = req.body;
    

    try {
        if (!email || !fullName || !bearsFee) {
        return res
            .status(400)
            .json({ status: 'fail', message: 'Please fill all fields' });
        }

        const newCustomer = new Customer(req.body);
        const customer = await newCustomer.save();
        if (!customer) {
            return res
            .status(400)
            .json({ status: 'fail', message: 'something went wrong' });
        }
        return res
            .status(200)
            .json({ status: 'success', message: 'successful', data: { email, fullName, bearsFee } });
        } catch (err) {
        return res
            .status(500)
            .json({ status: 'fail', message: 'server err', err });
        }
    }
}