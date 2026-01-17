import express from 'express'
const router = express.Router()
import { getAllRoomController,gettRoomByIdController,postRoomController,updateRoomController,deleteRoomController } from '../controller/roomController.js'


router.get('/',getAllRoomController)
router.get('/:id',gettRoomByIdController)
router.post('/',postRoomController)
router.patch('/:id',updateRoomController)
router.delete('/:id',deleteRoomController)

export default router