import {Router} from "express";
import {sendContactMail} from "../../controllers/customer/inquiryMail.controllers.js"


const router = Router();

router.route("/").post(sendContactMail);

export default router