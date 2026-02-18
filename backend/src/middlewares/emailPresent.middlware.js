import customerModel from "../models/customer/user.model.js";
import adminModel from "../models/admin/user.models.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";

const customerEmail = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json(
                new ApiError(400, "Email is required")
            );
        }

        const isEmail = await customerModel.findOne({ email });

        if (!isEmail) {
            return res.status(404).json(
                new ApiError(404, "Email not Found.")
            );
        }

        return next();

    } 
    catch (err) {
        if (res.headersSent) return;
        return res.status(500).json(
            new ApiError(500, err.message, [
                { message: err.message, name: err.name }
            ])
        );
    }
};



const adminEmail = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json(
                new ApiError(400, "Email is required")
            );
        }

        const isEmail = await adminModel.findOne({ email });

        if (!isEmail) {
            return res.status(404).json(
                new ApiError(404, "Email not Found.")
            );
        }

        return next();

    } 
    catch (err) {
        if (res.headersSent) return;
        return res.status(500).json(
            new ApiError(500, err.message, [
                { message: err.message, name: err.name }
            ])
        );
    }
}


export { customerEmail, adminEmail };