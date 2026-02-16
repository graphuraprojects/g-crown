import {Router} from "express";
import {getAllProducts, getProductById, addReview, getProductReviews, newArrivalProducts} from "../../controllers/customer/product.controllers.js";
import isAuth from "../../middlewares/requiredLogin.middleware.js";

const router = Router();

router.route("/v1/customer/product/review").post(isAuth, addReview);
router.route("/v1/customer/product/all").get( getAllProducts);
router.route("/v1/customer/product/productId/:id").get(getProductById);
router.route("/v1/customer/product/newarrival").get(newArrivalProducts);
router.route("/v1/customer/product/:productId/reviews").get(getProductReviews);


export default router