import {Router} from "express";
import {addItem, updateItemQuantity, clearCart, removeItem, getItems} from "../../controllers/customer/cart.controllers.js";
import isAuth from "../../middlewares/requiredLogin.middleware.js";

const router = Router();

router.route("/v1/customer/cart/add").post(isAuth, addItem);
router.route("/v1/customer/cart/remove").put(isAuth, removeItem);
router.route("/v1/customer/cart/updateQuantity").put(isAuth, updateItemQuantity);
router.route('/v1/customer/cart/clear').put(isAuth, clearCart);
router.route("/v1/customer/cart/all").get(isAuth, getItems);

export default router;

