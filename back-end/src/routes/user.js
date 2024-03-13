import { Router } from 'express'
import controller from '../controllers/user.js'

const router = Router()

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id' , controller.retrieveOne)
router.put('/update/:id', controller.update)
router.delete('/:id', controller.delete)
router.post('/login', controller.login)

export default router