const express = require('express')
const router = express.Router()
const userNrController = require('../controllers/usersNr')

router.get('/all', userNrController.getUsers)
router.get('/create', userNrController.getCreateUser)
router.get('/update/:id', userNrController.getUpdateUser)
router.get('/delete/:id', userNrController.getDeleteUser)

router.post('/create', userNrController.createUser)
router.post('/update/:id', userNrController.updateUser)
router.post('/delete/:id', userNrController.deleteUser)

module.exports = router