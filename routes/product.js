const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
let { body } = require('express-validator'); 

let validationsProductAdd = [
    body('nombre')
        .notEmpty().withMessage('Debes completar este campo'),
    body('foto')
        .notEmpty().withMessage('Debes completar este campo')
        .isURL().withMessage('Debes completar con una URL valida'),
    body('descripcion')
        .notEmpty().withMessage('Debes completar este campo').bail()
        
];

router.get('/add', productController.productAdd);
router.post('/add', validationsProductAdd, productController.productStore);

router.get('/:id?',productController.product);

module.exports = router; 

