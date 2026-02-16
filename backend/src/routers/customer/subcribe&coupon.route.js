import {Router} from "express";
import isAuth from "../../middlewares/requiredLogin.middleware.js";
import {subscribe,userCoupon} from "../../controllers/customer/subscriber.controllers.js";

const router = Router();

router.route("/v1/customer/subscribe&coupon/subscribe").post(subscribe);
router.route("/v1/customer/subscribe&coupon/useCoupon").post(isAuth, userCoupon);

export default router
