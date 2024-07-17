import { Router } from 'express'
import {
    addProducts,
    getAllProducts,
    getProductsById,
    deleteProductsById,
    searchProducts,
    getProductByCategory
} from '../controllers/addProductController';
import { authenticate } from '../middleware/auth';
import { adminCheck } from '../middleware/checkadmin';
const router = Router();
import multer from 'multer';
import { makePayment } from "../controllers/paymentController";

// const upload = multer({ dest: 'uploads/' }); // Define the temporary storage location

// const multer = require('multer');
var uploader = multer({
    storage: multer.diskStorage({}),
    dest: '..uploads/',
    limits: { fileSize: 5000000 }
});


router.post('/v1/addProducts', uploader.single("file"), addProducts)
router.get('/v1/products', getAllProducts)
router.get('/v1/products/:id', getProductsById)
router.delete('/v1/products/:id', deleteProductsById)
router.post('/v1/searchProduct', searchProducts)

router.get('/v1/productbycategory/:category', getProductByCategory)


router.post("/v1/create-checkout-session", makePayment)


export default router