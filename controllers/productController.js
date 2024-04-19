const db = require('../db/datos');
const productController = {

    product: function(req,res){
        res.render('product',{
            productos: db.listaProductos
        })
    },
    productAdd: function(req,res){
        res.render('product-add',{
            productos: db.listaProductos,
            usuarios: db.usuarios
        })
    },

};

module.exports = productController;
