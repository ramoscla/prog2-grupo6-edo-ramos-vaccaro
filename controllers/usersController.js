const db = require('../db/datos');
let validationResult = require('express-validator')
const usersController = {
    register: function (req, res) {
        
        res.cookie('usuario', 'Carlos',{maxAge: 1000 * 60 * 60}) ;
        
        res.render('register');

    }
    ,
    loginUsuario: function(req,res){
        let form = req.body; 
        let error = validationResult(req); 

    },

    login: function (req, res) {
        console.log(req.cookies.usuario);
        res.render('login');
    },
    profile: function (req, res) {
        res.render('profile', { usuario: db.usuario, productos: db.listaProductos });
    },
    profileEdit: function (req, res) {
        res.render('profile-edit', { usuario: db.usuario });
    }
};

module.exports = usersController;
