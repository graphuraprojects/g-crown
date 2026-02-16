import {Router} from "express";
import {addWishlist, removeWishlist,removeAll, getWishlist} from "../../controllers/customer/wishlist.controllers.js";
import isAuth from "../../middlewares/requiredLogin.middleware.js";

const router = Router();

router.route("/v1/customer/wishlist/add").post(isAuth, addWishlist);
router.route("/v1/customer/wishlist/remove").put(isAuth, removeWishlist);
router.route("/v1/customer/wishlist/removeall").put(isAuth, removeAll);
router.route("/v1/customer/wishlist/allitem").get(isAuth, getWishlist);

export default router