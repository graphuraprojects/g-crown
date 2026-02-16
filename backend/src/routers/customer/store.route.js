import {Router} from "express";
import {getShowrooms,
    suggestions,
    searchByCityPincode,
    searchByPincode,
    searchByCity,} from "../../controllers/customer/store.controllers.js";

const router = Router();

router.route("/v1/customer/store").get(getShowrooms);
router.route("/v1/customer/store/city").get(searchByCity);
router.route("/v1/customer/store/pincode").get(searchByPincode);
router.route("/v1/customer/store/city-pincode").get(searchByCityPincode);
router.route("/v1/customer/store/suggest").get(suggestions);

export default router;


