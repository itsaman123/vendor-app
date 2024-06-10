const router=require('express').Router();
import {getUsers} from '../controllers/userController';
router.get('/v1/getAllUsers', getUsers);

export default router;