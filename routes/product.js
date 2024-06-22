const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/',productController.product);

router.get('/add', productController.productAdd);
router.post('/add', productController.productStore)

module.exports = router; 