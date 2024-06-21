import { Router } from 'express'
import { addProducts, getAllProducts } from '../controllers/addProductController';
import { authenticate } from '../middleware/auth';
import { adminCheck } from '../middleware/checkadmin';
const router=Router();

router.post('/v1/addProducts',  addProducts)
router.get('/v1/products', getAllProducts)

export default router