
import express from "express";
import {
  addAddress,
  getAddresses,
  updateAddress,
  deleteAddress
} from "../../controllers/order/address.controller.js";

import isAuth from "../../middlewares/requiredLogin.middleware.js"

const router = express.Router();

router.post("/addresses", isAuth, addAddress);
router.get("/addresses", isAuth, getAddresses);
router.put("/addresses/:id", isAuth, updateAddress);
router.delete("/addresses/:id", isAuth, deleteAddress);

export default router;
