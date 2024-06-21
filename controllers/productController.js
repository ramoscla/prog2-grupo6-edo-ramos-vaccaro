const db = require('../database/models');

const productController = {
    product: function (req, res) {
        let objeto = req.query.id;
        console.log(objeto);
        db.Producto.findByPk (objeto,
            {include : [{association: 'usuario'}]}
        )
        .then( (resultados) => {
            res.render('product', { productos: resultados  });
            console.log(resultados);
        })
    },
    productAdd: function (req, res) {
        res.render('product-add', { productos: db.listaProductos, usuario: db.usuario });
    },

};

module.exports = productController;

