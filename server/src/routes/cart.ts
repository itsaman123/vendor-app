import { Router } from 'express'
import { saveCartDetails, getCartDetails, deleteCartDetails } from '../controllers/cart'

const router = Router();
router.post('/v1/cart', saveCartDetails)
router.get('/v1/cart/:id', getCartDetails)

router.delete('/v1/cart/:id', deleteCartDetails)

export default router