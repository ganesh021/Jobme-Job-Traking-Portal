import express from 'express'
const router = express.Router()

import { register, login, guestLogin, updateUser } from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'


router.route('/register').post(register)
router.route('/login').post(login)
router.route('/guest').post(guestLogin)
router.route('/updateUser').patch(authenticateUser, updateUser)

export default router