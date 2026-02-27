import nodemailer from "nodemailer";
import { ApiError } from "../../utils/api-error.js";
import { ApiResponse } from "../../utils/api-response.js";
import SibApiV3Sdk from "sib-api-v3-sdk";

const otp = async (req, res) => {

<<<<<<< HEAD
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
<div style="margin:0;padding:0;background:#fdf8ef;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">
        <table width="500" cellpadding="0" cellspacing="0" 
          style="background:#ffffff;border-radius:12px;
          box-shadow:0 8px 24px rgba(0,0,0,0.08);overflow:hidden;">

          <tr>
            <td style="background:linear-gradient(135deg,#1C3A2C,#CBA135);
              padding:25px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:24px;letter-spacing:1px;">
                G-CROWN
              </h1>
              <p style="color:#fdf8ef;margin:5px 0 0;font-size:13px;">
                Timeless Luxury Jewellery
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:35px 30px;text-align:center;color:#333;">
              <h2 style="margin:0 0 15px;color:#1C3A2C;">
                Verify Your Account
              </h2>

              <p style="font-size:14px;color:#555;margin-bottom:25px;">
                Use the verification code below to complete your login.
              </p>

              <div style="
                display:inline-block;
                padding:18px 40px;
                background:#f4efe4;
                border-radius:10px;
                border:2px dashed #CBA135;
                font-size:32px;
                font-weight:bold;
                letter-spacing:6px;
                color:#1C3A2C;
              ">
                ${OTP}
              </div>

              <p style="margin-top:25px;font-size:13px;color:#666;">
                This OTP will expire in <b>5 minutes</b>.
              </p>

              <p style="margin-top:10px;font-size:12px;color:#999;">
                For security reasons, do not share this code with anyone.
              </p>
            </td>
          </tr>

          <tr>
            <td style="
              background:#f9f4e8;
              padding:18px;
              text-align:center;
              font-size:12px;
              color:#777;
            ">
              © ${new Date().getFullYear()} G-Crown Jewellers. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</div>
`,
        };

        await apiInstance.sendTransacEmail(emailData);

        return res
            .status(200)
            .json(new ApiResponse(200, OTP, "Otp Sent Successfully."));

    }
=======
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
>>>>>>> master
    catch (err) {
        return res.status(500).json(new ApiError(500, err.message, [{ message: err.message, name: err.name }]))
    }
}

export default otp;