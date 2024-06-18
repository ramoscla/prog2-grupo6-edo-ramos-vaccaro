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
            // procesamos el controlador normalmente 
         db.usuario.findOne({
            where: [{nombre: req.body.nombre}]
         })
         .then(function(usuarioEncontrado){
            //Los pongo en session
            req.session.user ={ 
                nombre: usuarioEncontrado.nombre
            }})
           
         }
         //if (req.body.recordarme != undefined){
           // ('cookieEspecial', 'el dato que quiero guardar', {maxAge: 1000*60*123123123})
             //   }
                //Y si el usuario quiere, agregar la cookie para que lo recuerde.
              //  return res.redirect('/');
          //  )})

         else {
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
