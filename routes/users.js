const express = require('express');
const router = express.Router();
const db = require('../database/models/index')
const usersController = require('../controllers/usersController');
const {body} = require('express-validator'); 

let validationsRegister = [
    
    body('email')
        .notEmpty().withMessage('Debes completar el email'). bail()
        .isEmail()
        .custom(function (value) {
            return db.Usuario.findOne({
                where: { email: value },
            })
            .then(function (user) {
                if(user){
                    throw new Error('El mail ingresado ya existe.')
                }
            })
        }),    
    body('nombre')
        .notEmpty().withMessage('Debes completar el nombre de usuario'). bail()
        .isLength({ min: 4 }).withMessage('El nombre debe ser más largo'),
    body('contraseniaUsuario')
        .notEmpty().withMessage('Debes completar la contraseña'). bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe contener un mínimo de 8 caracteres'),

];


let validationsLogin = [
    body('nombre')
    .notEmpty().withMessage('Debes completar el nombre de usuario'). bail()
    .custom(function(value, {req}){
        return db.Usuario.findOne({
            where: {nombre :req.body.nombre},
        })
        .then(function(user){
            if(user != undefined){
                return true;
            }
            else{
                throw new Error ('Este nombre de usuario no existe')
            }

        })
    })
]; 


router.get('/register', usersController.register);
router.post('/resgister', validationsRegister, usersController.processRegister)

router.get('/login', usersController.login);
router.post('/login', );

router.get('/profile', usersController.profile);

router.get('/profile/edit', usersController.profileEdit);


module.exports = router;
