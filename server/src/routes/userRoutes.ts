const router=require('express').Router();
import {getUsers, loginUsers, registerUser,getProfile} from '../controllers/userController';
import { authenticate } from '../middleware/auth';
 import {adminCheck} from '../middleware/checkadmin'

router.get('/v1/getAllUsers',authenticate, getUsers);
router.post('/v1/register', registerUser);
router.post('/v1/login', loginUsers);

 router.get('/v1/profile',authenticate, getProfile);

export default router;