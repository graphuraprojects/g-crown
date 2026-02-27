import express from "express";
<<<<<<< HEAD
import { searchProducts, searchSuggestions} from "../../controllers/common/search.controller.js";

const router = express.Router();

router.get("/search", searchProducts);
router.get("/suggestion", searchSuggestions);
=======
import { searchProducts } from "../../controllers/common/search.controller.js";

const router = express.Router();

/**
 * @route   GET /api/common/search
 * @desc    Search products
 * @access  Public
 */
router.get("/search", searchProducts);
>>>>>>> master

export default router;
