import { Router } from 'express'
import { addProducts, getAllProducts } from '../controllers/addProductController';
import { authenticate } from '../middleware/auth';
import { adminCheck } from '../middleware/checkadmin';
const router=Router();

router.post('/v1/addProducts', authenticate, adminCheck, addProducts)
router.get('/v1/products', authenticate, adminCheck, getAllProducts)

export default router