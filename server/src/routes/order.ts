import { Router } from 'express'
import { getOrderDetails, saveOrderDetails } from '../controllers/order'

const router = Router();
router.get('/v1/order', getOrderDetails)
router.post('/v1/order', saveOrderDetails)

export default router