const db = require('../db/datos');
const indexController = {

    index: function(req,res){
        res.render('index',{
            productos: db.listaProductos
        })
    },
    searchResults: function(req,res){
        res.render('search-results', {productos: db.listaProductos})
    }
    
};



module.exports = indexController; 