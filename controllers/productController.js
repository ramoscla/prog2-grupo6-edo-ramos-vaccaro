const db = require("../database/models");
const { validationResult } = require("express-validator");

const productController = {
    product: function (req, res) {
        let objeto = req.params.id;
        console.log(objeto);
        db.Producto.findByPk (objeto,
            {include : [
              {association: 'usuario'},
              {association: 'comentarios', include: [ {association :'usuario'}]}

            ]}
        )
        .then( (resultados) => {
            res.render('product', { productos: resultados  });
            console.log(resultados);
        })
    },
    productAdd: function (req, res) {
        if (req.session.user != undefined) {
            return res.render('product-add', { usuario: req.session.user });
        } else {
            return res.redirect('/users/login');
        }
    },
    productStore: function (req, res) {
        let form = req.body;
        let errors = validationResult(req)

        if (errors.isEmpty()) {

            db.Producto.create(form)
            .then(function (resultados) {
                return res.redirect('/product/' + resultados.id)
            })
            .catch(function(errors){
                console.log(errors);
            })

        }  else {
            return res.render('product', { errors: errors.mapped(), old: req.body});        
        }     
    },
    productDelete: function (req, res) {
      let objeto = req.params.id;
      db.Producto.findByPk(objeto).then((resultados) => {
        if (
          req.session.user != undefined &&
          req.session.user.id == resultados.usuarioId
        ) {
          console.log(req.session.user.id);
          db.Comentario.destroy({
            where: {
              productoId: objeto,
            },
          }).then(() => {
            db.Producto.destroy({
              where: {
                id: objeto,
              },
            }).then((resultados) => {
              return res.redirect("/");
            });
          });
        } else {
          return res.redirect("/users/login");
        }
      });
    },
    productEdit: function (req, res) {
      let objeto = req.params.id;
  
      if (req.session.user != undefined) {
        db.Producto.findByPk(objeto, {
          include: [{ association: "usuario" }],
        }).then((resultados) => {
          if (
            req.session.user != undefined &&
            req.session.user.id == resultados.usuarioId
          ) {
            res.render("product-edit", {
              productos: resultados,
              usuario: req.session.user,
            });
          }
        });
      } else {
        return res.redirect("/users/login");
      }
    },
    productEditStore: function (req, res) {
      let form = req.body;
      let errors = validationResult(req);
  
  
  if (errors.isEmpty()) {
      db.Producto.update(
        {
          nombre: form.nombre,
          foto: form.foto,
          descripcion: form.descripcion,
        },
        {
          where: {
            id: form.id,
          },
        }
      )
      .then(function (resultados) {
        return res.redirect("/");    
      })
      .catch(function (errors) {
        console.log(errors);
      });
    }
  },
    

productComentario: function(req,res){
    if (req.session.user != undefined) {
        return res.render('/product/', { usuario: req.session.user });
    } else {
        return res.redirect('/users/login');
    }

},
productComentarioStore: function(req,res){
    let form = req.body;
    let usuarioId = req.session.user.id; 
    let errors = validationResult(req);

  if (errors.isEmpty()) {
    let comentarioNuevo = {
      usuarioId: usuarioId,
      productoId: form.productoId,
      comentario: form.comentario
    }
  
    db.Comentario.create(comentarioNuevo)
      .then(function() {
          return res.redirect('/product/' + form.productoId);
      })
      .catch(function(error) {
          console.log(error);
          return res.redirect('/product/' + form.productoId);
      });
    
    } else{
        
        return res.render('/product/' + {errors: errors.mapped() });

    }
           
        
    }
}
module.exports = productController;
