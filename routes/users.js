const express = require('express');
const router = express.Router();
let db = require('../database/models')
const usersController = require('../controllers/usersController');
const { body } = require('express-validator'); 

let validationsRegister = [
    body('usuario')
        .notEmpty().withMessage('Debes completar el nombre de usuario').bail(),
    body('email')
        .notEmpty().withMessage('Debes completar el email').bail()
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
    body('contrasenia')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 4 }).withMessage('La contraseña debe contener un mínimo de 4 caracteres')
    
];

let validationsLogin = [
    body('nombre')
    .notEmpty().withMessage('Debes completar el nombre de usuario').bail()
    .custom(function(value, {req}){
        return db.Usuario.findOne({
            where: {nombre :value},
        })
        .then(function(user){
            if(user != undefined){
                return true;
            }
            else{
                throw new Error ('Este nombre de usuario no existe')
            }

        })
        
    }),
    body('contraseniaUsuario')
    .notEmpty().withMessage("Por favor complete la contraseña")
]; 

router.get('/register', usersController.register);
router.post('/register', validationsRegister, usersController.storeRegister);
router.get('/login', usersController.login);
router.post('/login', validationsLogin, usersController.loginUsuario); // procesar form de login
router.get('/profile', usersController.profile);
router.get('/profile/edit', usersController.profileEdit);

module.exports = router;
