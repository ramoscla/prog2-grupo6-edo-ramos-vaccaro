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
let validationsProductEdit = [
    body('nombre')
        .notEmpty().withMessage('Debes completar este campo'),
    body('foto')
        .notEmpty().withMessage('Debes completar este campo')
        .isURL().withMessage('Debes completar con una URL valida').bail(),
    body('descripcion')
        .notEmpty().withMessage('Debes completar este campo').bail()
        
];

router.get('/add', productController.productAdd);
router.post('/add', validationsProductAdd, productController.productStore);
router.get('/edit/:id', productController.productEdit);
router.post('/edit', validationsProductEdit, productController.productEditStore);
router.get('/delete/:id', productController.productDelete);
router.get('/:id?',productController.product);

module.exports = router; 

