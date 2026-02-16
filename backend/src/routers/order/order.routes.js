import express from "express";
import {
  getAllOrders,
  getOrders,
  createOrder,
  updateOrderStatus,
  generateInvoice,
  saveOrder,
  cancelOrder,
  requestRefund,
  processRefund
} from "../../controllers/order/order.controller.js";
import { trackOrder } from "../../controllers/order/trackOrderController.js";
import isAuth from "../../middlewares/requiredLogin.middleware.js"

const router = express.Router();

console.log("enter")
router.get("/track-order/:displayOrderId", trackOrder);

router.get("/v1/customer/order/all", getAllOrders)
router.get("/v1/customer/order", isAuth, getOrders);
router.post("/v1/customer/order/create",isAuth, createOrder);
router.put("/v1/customer/order/:id/status",isAuth, updateOrderStatus);
router.get("/v1/customer/order/:id/invoice", generateInvoice);
router.post("/v1/customer/order/save", isAuth, saveOrder);
router.put("/v1/customer/order/cancel/:id",isAuth, cancelOrder);
router.put("/v1/customer/order/refund/:orderId", requestRefund);
router.post("/v1/customer/order/process-refund/:orderId", processRefund);


export default router;
