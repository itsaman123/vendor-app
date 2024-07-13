const router = require('express').Router();
import { getUsers, loginUsers, registerUser, getProfile, saveAddress,getAddress, healthCheck } from '../controllers/userController';
import { authenticate } from '../middleware/auth';
import { adminCheck } from '../middleware/checkadmin'

router.get('/v1/getAllUsers', authenticate, getUsers);
router.post('/v1/register', registerUser);
router.post('/v1/login', loginUsers);

router.get('/v1/profile', authenticate, getProfile);
router.post('/v1/user-address',authenticate, saveAddress);
router.get('/v1/user-address',authenticate, getAddress);

router.get('/v1/health', healthCheck);

export default router;