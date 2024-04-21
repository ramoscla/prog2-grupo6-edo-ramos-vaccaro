const db = require('../db/datos');

const usersController = {
    register: function (req, res) {
        res.render('register');
    },
    login: function (req, res) {
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
