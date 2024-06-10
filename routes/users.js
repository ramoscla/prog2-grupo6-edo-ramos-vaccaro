const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const {body} = require('express-validator'); 
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

router.get('/login', usersController.login);

router.post('/login', );

router.get('/profile', usersController.profile);

router.get('/profile/edit', usersController.profileEdit);


module.exports = router;
