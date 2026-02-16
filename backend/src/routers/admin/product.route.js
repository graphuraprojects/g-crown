import {Router} from "express";
import multer from "multer";
import isAuth from "../../middlewares/requiredLogin.middleware.js";
import {uploadNewProduct, getAllItem, updatePrice, updateQuantity, hardDeleteProduct, softDeleteProduct, restoreProduct} from "../../controllers/admin/product.controllers.js";

const router = Router();

let storage = multer.memoryStorage();

let upload = multer({storage});

router.route("/v1/admin/product/addProduct").post(isAuth, upload.array("productImage", 5) ,uploadNewProduct);
router.route("/v1/admin/product/getall").get(isAuth, getAllItem);
router.route("/v1/admin/product/price").put(isAuth, updatePrice);
router.route("/v1/admin/product/quantity").put(isAuth,updateQuantity);
router.route("/v1/admin/product/harddelete").delete(isAuth, hardDeleteProduct);
router.route("/v1/admin/product/softdelete").put(isAuth,softDeleteProduct);
router.route("/v1/admin/product/restore").put(isAuth, restoreProduct);
// router.route("/image").put(isAuth, upload.array("productImage", 5), imageUpload)

export default router;