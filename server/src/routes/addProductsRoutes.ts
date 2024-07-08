import { Router } from 'express'
import { addProducts, getAllProducts, getProductsById, deleteProductsById, searchProducts } from '../controllers/addProductController';
import { authenticate } from '../middleware/auth';
import { adminCheck } from '../middleware/checkadmin';
const router = Router();
import multer from 'multer';

// const upload = multer({ dest: 'uploads/' }); // Define the temporary storage location

// const multer = require('multer');
var uploader= multer({
    storage: multer.diskStorage({}),
    dest: '..uploads/',
    limits: { fileSize: 500000 }
});


router.post('/v1/addProducts', uploader.single("file"), addProducts)
router.get('/v1/products', getAllProducts)
router.get('/v1/products/:id', getProductsById)
router.delete('/v1/products/:id', deleteProductsById)




router.post('/v1/searchProduct', searchProducts)


export default router