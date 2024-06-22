const db = require('../database/models');

const productController = {
    product: function (req, res) {
        let objeto = req.params.id;
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
        if (req.session.user != undefined) {
            return res.render('product-add');
        } else {
            return res.redirect("/users/login");
        }
    },
    productStore: function (req,res) {
        // a completar
    }
};

module.exports = productController;

