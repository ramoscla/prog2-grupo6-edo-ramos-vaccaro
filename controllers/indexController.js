const db = require('../database/models');
// const db = require('../db/datos');

const indexController = {
    index: function (req, res) {
        db.Producto.findAll()
        .then((resultados) => {
            res.render('index', { productos: resultados });
        })
    },
    searchResults: function (req, res) {
        let objeto = req.query.search;
         db.Producto.findAll({
             where: [
                 {nombre : objeto }
            ]
         })
         .then((resultados) => {
             res.render('search-results', { productos: resultados });
             console.log(resultados);
         })
     }
    // searchResults: function (req, res) {
    //     let producto = req.query.search;
        
    //     res.render('search-results', { productos: db.listaProductos });
    // }

};

module.exports = indexController;
