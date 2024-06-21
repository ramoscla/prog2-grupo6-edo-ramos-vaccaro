const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); 

const usersController = {

    register: function (req, res) {
        return res.render('register');
    },
    storeRegister: function (req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()){
            let form = req.body;

            let contraEncriptada = bcrypt.hashSync(form.contrasenia, 10);
            form.contrasenia = contraEncriptada;
           
            db.Usuario.create(form)
                .then(function (result) {
                    return res.redirect('/users/login')
                })
                .catch(function(error){
                    console.log(error);
                })

        } else {
            return res.render('register', { errors: errors.mapped(), old: req.body });        
        }
    },
    login: function (req, res) {
        
        if (req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('login');
        }
    },
    loginUsuario: function(req, res) {
        let form = req.body;
        let error = validationResult(req);
        
        if (error.isEmpty()) {
            // Procesamos el controlador normalmente
            db.Usuario.findOne({
                where: { email: form.email }
            })
        
            .then(function(usuarioEncontrado) {
                if (usuarioEncontrado != null){
                 // Ponemos en session los datos del usuario encontrado
                 let check = bcrypt.compareSync(form.contrasenia, usuarioEncontrado.contrasenia);
                 if (check) {
                    req.session.user = { 
                        email: usuarioEncontrado.email,
                        usuario: usuarioEncontrado.usuario
                    }  

                    if(form.recordarme != undefined){
                        res.cookie('usuario_id', usuarioEncontrado.id, {maxAge: 1000*60*123123123})
                    }
                    //Y si el usuario quiere, agregar la cookie para que lo recuerde.
                    
                    return res.redirect('/');
    
                };
               
            }});
        } else {
            // Si hay errores de validación, renderizamos el formulario de login con los errores
            res.render("login", { error: error.mapped() });
        }
    },

    profile: function(req, res) {
        res.render('profile', { usuario: db.usuario, productos: db.listaProductos });
    },
    profileEdit: function(req, res) {
        res.render('profile-edit', { usuario: db.usuario });
    },
    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie('usuario');
        res.redirect('/');
    } 
};

module.exports = usersController;
