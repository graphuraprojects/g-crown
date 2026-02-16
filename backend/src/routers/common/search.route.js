import express from "express";
import { searchProducts } from "../../controllers/common/search.controller.js";

const router = express.Router();

/**
 * @route   GET /api/common/search
 * @desc    Search products
 * @access  Public
 */
router.get("/v1/common/search", searchProducts);

export default router;
