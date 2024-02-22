import express from 'express';
import controller from '../controller/info.js'

const router = express.Router()

router.get('/', controller.getInfo)

export default router