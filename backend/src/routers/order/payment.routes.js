import express from "express";
import { createOrder} from "../../controllers/order/payment.controller.js";
import {verifyPayment} from "../../controllers/order/payment.controller.js";
import isAuth from "../../middlewares/requiredLogin.middleware.js"


const router = express.Router();
router.post("/payment/create", createOrder);
router.post("/payment/create-order", createOrder);
router.post("/payment/verify",isAuth, verifyPayment);



export default router;
