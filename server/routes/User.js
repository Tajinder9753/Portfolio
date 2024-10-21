const express = require('express')
const userCntrl = require('../controllers/User.js')
const router = express.Router()
router.route('/users').post(userCntrl.create)
router.route('/users').get(userCntrl.list)
router.param('userId',userCntrl.userByID)
router.route('/users/:userId').get(userCntrl.read)
router.route('/users/:userId').get(userCntrl.update)
router.route('/users/:userId').get(userCntrl.remove)
module.exports = router;
