import nodemailer from "nodemailer";
import { ApiError } from "../../utils/api-error.js";
import { ApiResponse } from "../../utils/api-response.js";
import SibApiV3Sdk from "sib-api-v3-sdk";

const otp = async (req, res) => {

try {
    const { email } = req.body;

    // Generate 6-digit OTP properly
    const OTP = Math.floor(100000 + Math.random() * 900000).toString();

    const client = SibApiV3Sdk.ApiClient.instance;

    // Add Brevo API Key
    client.authentications["api-key"].apiKey =
        process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const emailData = {
        sender: {
            name: "G-Crown",
            email: "logine786@gmail.com",
        },
        to: [
            {
                email: email,
            },
        ],
        subject: "Your G-Crown Verification Code",
        htmlContent: `
            <div style="font-family: Arial, sans-serif;">
                <h2 style="color: #0066cc;">G-Crown</h2>
                <p>Your One-Time Password (OTP) for verifying your G-Crown account is:</p>
                <h1 style="color: #333;">${OTP}</h1>
                <p>This OTP will expire in <b>5 minutes</b>.</p>
                <p>Do not share this code with anyone.</p>
                <br />
                <p>– The G-Crown Team</p>
            </div>
        `,
    };

    await apiInstance.sendTransacEmail(emailData);

    return res
        .status(200)
        .json(new ApiResponse(200, OTP, "Otp Sent Successfully."));

}
    catch (err) {
        return res.status(500).json(new ApiError(500, err.message, [{ message: err.message, name: err.name }]))
    }
}

export default otp;