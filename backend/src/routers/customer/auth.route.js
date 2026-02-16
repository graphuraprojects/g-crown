import {Router} from "express";
import multer from "multer";
import otp from "../../controllers/common/otp.controllers.js";
import {Signup, Login, ForgotPassword, changePassword, Signout, UpdateProfile, myProfile, GoogleAuth} from "../../controllers/customer/auth.controllers.js";
import duplicateEmail from "../../middlewares/duplicationEmail.middlware.js";
import {customerEmail} from "../../middlewares/emailPresent.middlware.js";
import isAuth from "../../middlewares/requiredLogin.middleware.js";

let router = Router();


let storage = multer.memoryStorage();

let upload = multer({storage});

router.route("/v1/customer/auth/signupOtp").post(duplicateEmail, otp);
router.route("/v1/customer/authsignup").post(Signup);
router.route("/v1/customer/auth/login").post(customerEmail, Login);
router.route("/v1/customer/auth/googleLogin").post(duplicateEmail, GoogleAuth);
router.route("/v1/customer/auth/forgetPasswordOtp").post(customerEmail, otp);
router.route("/v1/customer/auth/forgetPassword").put(ForgotPassword);
router.route("/v1/customer/auth/changePassword").put(isAuth, changePassword)
router.route("/v1/customer/auth/signout").post(Signout);
router.route("/v1/customer/auth/profile").put(isAuth, upload.single("profileImage"), UpdateProfile)
router.route("/v1/customer/auth/myProfile").get(isAuth, myProfile)

export default router;
