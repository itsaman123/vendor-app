const router=require('express').Router();
import {getUsers} from '../controllers/userController';
import {registerUser} from '../controllers/userController';
import {loginUsers} from '../controllers/userController';

router.get('/v1/getAllUsers', getUsers);
router.post('/v1/register', registerUser);
router.post('/v1/login', loginUsers);

export default router;