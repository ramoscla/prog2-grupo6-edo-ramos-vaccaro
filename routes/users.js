const express = require('express');
const router = express.Router();
let db = require('../database/models')
const usersController = require('../controllers/usersController');
let { body } = require('express-validator'); 

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
    body('email')
    .notEmpty().withMessage('Debes completar el campo con tu email').bail()
    .isEmail().withMessage('Por favor ingrese un email válido')
    .custom(function(value){
        return db.Usuario.findOne({
            where: {email :value},
        })
        .then(function(user){
            if(user != undefined){
                return true;
            }
            else{
                throw new Error ('Este email no ha sido registrado.')
            }

        })
        
    }),
    body('contrasenia')
    .notEmpty().withMessage('Por favor ingrese la contraseña')
    
]; 

let validationsProfileEdit = [
    body('usuario')
    .notEmpty().withMessage('Debes completar el nombre de usuario').bail(),
    body('email')
    .notEmpty().withMessage('Debes completar el email').bail()
    .isEmail()
    .custom(function (value, {req}) {
        if (value !== req.session.user.email) {
            return db.Usuario.findOne({
                where: { email: value },
            })
            .then(function (user) {
                if (user) {
                    throw new Error('El mail ingresado ya existe.');
                }
            });
        }
        return true; 
    }),  
    body('contrasenia')
        .custom(function (value) {
            console.log(value);
            if (value && value.length < 4) {
                throw new Error('La contraseña debe contener un mínimo de 4 caracteres')
            }
            return true
        })
    
];

router.get('/register', usersController.register);
router.post('/register', validationsRegister, usersController.storeRegister);
router.get('/login', usersController.login);
router.post('/login', validationsLogin, usersController.loginUsuario); // procesar form de login
router.post('/logout', usersController.logout);	

router.get('/profile/edit', usersController.profileEdit);
router.post('/profile/edit', validationsProfileEdit, usersController.profileEditStore);

router.get('/profile/:id?', usersController.profile);
;
module.exports = router;

