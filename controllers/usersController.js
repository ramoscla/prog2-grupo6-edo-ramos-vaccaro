const db = require('../database/models');
let {validationResult} = require('express-validator')

const usersController = {
    register: function (req, res) {
        res.render('register');

    },
    processRegister: function (req, res) {
        let form = req.body;
        db.Usuario.create(form)
        .then(function (result) {
            return res.redirect('/users/login')
        })
        .catch(function(error){
            console.log(error);
        })
    },
    login: function (req, res) {
        console.log(req.cookies.usuario);
        res.render('login');
    },
    loginUsuario: function(req,res){
        let form = req.body; 
        let error = validationResult(req); 
        if (error.isEmpty()){
            // procesamos el controlador marmalemtne 
         db.usuario.findOne({
            where: [{nombre: req.body.nombre}]
         })
        } else {
            return res.render("login", {error: error.mapped()})
        }

    },
    profile: function (req, res) {
        res.render('profile', { usuario: db.usuario, productos: db.listaProductos });
    },
    profileEdit: function (req, res) {
        res.render('profile-edit', { usuario: db.usuario });
    }
};

module.exports = usersController;
