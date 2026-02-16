import express from "express";
import { getAllOrders, updateOrderStatus, getOrdersById } from "../../controllers/order/adminOrderController.js";

const router = express.Router();

router.get("/v1/admin/order", getAllOrders);
router.put("/v1/admin/order/:id/status", updateOrderStatus);
router.get("/v1/admin/order/search/:orderId", getOrdersById)

export default router;
