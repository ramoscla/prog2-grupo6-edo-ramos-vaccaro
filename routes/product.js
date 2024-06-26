const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
let { body } = require("express-validator"); 

let validationsProductAdd = [
    body("nombre")
        .notEmpty().withMessage("Debes completar este campo"),
    body("foto")
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isURL().withMessage("Debes completar con una URL válida"),
    body("descripcion")
        .notEmpty().withMessage("Debes completar este campo")
        
];
let validationsProductEdit = [
    body("nombre")
        .notEmpty().withMessage("Debes completar este campo"),
    body("foto")
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isURL().withMessage("Debes completar con una URL valida"),
    body("descripcion")
        .notEmpty().withMessage("Debes completar este campo")
        
];

let validationsProductComentario = [
    body("comentario")
        .notEmpty().withMessage("Debes completar el campo de comentario.").bail()
        .isLength({ min: 3 }).withMessage("El comentario debe tener al menos 3 caracteres.")
];

router.get("/add", productController.productAdd);
router.post("/add", validationsProductAdd, productController.productStore);

router.get("/edit/:id", productController.productEdit);
router.post("/edit", validationsProductEdit, productController.productEditStore);

router.get("/delete/:id", productController.productDelete);

router.post("/:id", validationsProductComentario, productController.productComentarioStore)
router.get("/:id?",productController.product);

module.exports = router; 

