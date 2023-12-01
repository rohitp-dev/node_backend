const router = require('express').Router()
const productController = require('./product.controller')

router.get('/', productController.findAll)
router.post('/', productController.createOne)
router.get('/:_id', productController.findOne)
router.delete('/:_id', productController.deleteOne)
router.patch('/:_id', productController.updateOne)

module.exports = router