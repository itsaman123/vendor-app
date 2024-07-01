import { Router } from 'express'
import { addProducts, getAllProducts, getProductsById, deleteProductsById} from '../controllers/addProductController';
import { authenticate } from '../middleware/auth';
import { adminCheck } from '../middleware/checkadmin';
const router=Router();

router.post('/v1/addProducts',  addProducts)
router.get('/v1/products', getAllProducts)
router.get('/v1/products/:id', getProductsById)
router.delete('/v1/products/:id', deleteProductsById)

export default router