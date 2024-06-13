const router=require('express').Router();
import {getUsers, loginUsers, registerUser} from '../controllers/userController';
import { authenticate } from '../middleware/auth';
 import {adminCheck} from '../middleware/checkadmin'

router.get('/v1/getAllUsers',authenticate, adminCheck, getUsers);
router.post('/v1/register', registerUser);
router.post('/v1/login', loginUsers);

export default router;