const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); 
const { association } = require('sequelize');

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
                .then(function (resultados) {
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
        let errors = validationResult(req);
        
        if (errors.isEmpty()) {
            // Procesamos el controlador normalmente
            db.Usuario.findOne({
                where: { email: form.email }
            })
        
            .then(function(usuarioEncontrado) {
                if (usuarioEncontrado != null){
                 // Ponemos en session los datos del usuario encontrado
                 let check = bcrypt.compareSync(form.contrasenia, usuarioEncontrado.contrasenia);
                 
                 if (check) {
                    req.session.user = usuarioEncontrado;

                    if(form.recordarme != undefined){
                        res.cookie('usuarioId', usuarioEncontrado.id, {maxAge: 1000*60*123123123})
                    }
                    //Y si el usuario quiere, agregar la cookie para que lo recuerde.
                    
                    return res.redirect('/');
    
                };
               
            }});
        } else {
            // Si hay errores de validación, renderizamos el formulario de login con los errores
            res.render("login", { errors: errors.mapped() });
        }
    },

    profile: function(req, res) {
        let usuarioId  = req.params.id;

        db.Usuario.findByPk(usuarioId, { include: [
            {association: 'productos'},
            {association : 'comentarios'} 
        ],
        order :[['createdAt', 'DESC']]})
        
        .then(function(resultados){

            return res.render('profile', {
                usuario: resultados
                
               })
        })
        .catch (function(error){
            console.log(error);
        })

       // .then((resultados) => {
        //res.render('profile', { usuario: db.usuario, productos: db.listaProductos });
        //console.log(resultados) })
    },
    profileEdit: function(req, res) {
        if (req.session.user != undefined) {
        
            let usuarioId = req.session.user.id; 

            db.Usuario.findByPk(usuarioId)
            .then(function (resultados) {
                res.render('profile-edit', {usuario: resultados})
            })
            .catch (function(error){
                console.log(error);
            })

        } else {
            res.redirect('/users/login')
        }
    },
    profileEditStore: function (req, res) {

        let form = req.body;
        let errors = validationResult(req);
        let usuarioId = req.session.user.id; 

        if (errors.isEmpty()){

            let actualizar = {};      

            if (form.contrasenia && form.contrasenia !== req.session.user.contrasenia) {
                req.session.user.contrasenia = form.contrasenia;
                actualizar.contrasenia = bcrypt.hashSync(form.contrasenia, 10);
            }
             
            if (form.email && form.email !== req.session.user.email) {
                req.session.user.email = form.email;
                actualizar.email = form.email;
            }
    
            actualizar.usuario = form.usuario;
            actualizar.fechaNacimiento = form.Nacimiento;
            actualizar.DNI = form.DNI;
            actualizar.foto = form.foto;

            db.Usuario.update(actualizar, { where: { id: usuarioId }})
                .then(function (resultados) {

                    req.session.user.usuario = actualizar.usuario;
                    req.session.user.fechaNacimiento = actualizar.fechaNacimiento;
                    req.session.user.DNI = actualizar.DNI;
                    req.session.user.foto= actualizar.foto;
        
                    return res.redirect('/users/profile/' + usuarioId)
                })
                .catch(function(error){
                    console.log(error);
                })

        } else {
            return res.render('profile-edit', { errors: errors.mapped(), old: req.body, usuario: form});        
        }
    },
    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie('usuarioId');
        res.redirect('/');
    } 
};

module.exports = usersController;
