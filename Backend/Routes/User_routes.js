import express from 'express';
import { getUsers, loginUser, signupUser } from '../Controllers/User_Controller.js';
import { loginValidation, signupValidation } from '../Middlewares/Validation.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/signup', signupValidation, signupUser);
router.post('/login', loginValidation, loginUser);

export default router;