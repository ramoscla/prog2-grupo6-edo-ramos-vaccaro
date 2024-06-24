const db = require("../database/models");
const { validationResult } = require("express-validator");

const productController = {
  product: function (req, res) {
    let productoId = req.params.id;
    console.log(productoId);
    db.Producto.findByPk(productoId, {
      include: [
        { association: "usuario" },
        { association: "comentarios", include: [{ association: "usuario" }] },
      ],
      order: [
        [{ model: db.Comentario, as: "comentarios" }, "createdAt", "DESC"],
      ],
    })
    .then(function (resultados) {
      res.render("product", { productos: resultados });
      console.log(resultados);
    });
  },
  productAdd: function (req, res) {
    if (req.session.user != undefined) {
      return res.render("product-add", { usuario: req.session.user });
    } else {
      return res.redirect("/users/login");
    }
  },
  productStore: function (req, res) {
    let form = req.body;
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Producto.create(form)
        .then(function (resultados) {
          return res.redirect("/product/" + resultados.id);
        })
        .catch(function (errors) {
          console.log(errors);
        });
    } else {
      db.Producto.findByPk(form.productoId, {
        include: [
          { association: "usuario" },
          { association: "comentarios", include: [{ association: "usuario" }] },
        ],
      })
      .then(function (resultados) {
        return res.render("product-add", {
          errors: errors.mapped(),
          old: req.body,
          productos: resultados,
          usuario: req.session.user,
        });
      })
      .catch(function (errors) {
        console.log(errors);
      });
    }
  },
  productDelete: function (req, res) {
    let productoId = req.params.id;
    db.Producto.findByPk(productoId).then((resultados) => {
      if (
        req.session.user != undefined &&
        req.session.user.id == resultados.usuarioId
      ) {
        console.log(req.session.user.id);
        db.Comentario.destroy({
          where: {
            productoId: productoId,
          },
        })
        .then(() => {
          db.Producto.destroy({
            where: {
              id: productoId,
            },
          })
          .then((resultados) => {
            return res.redirect("/");
          });
        });
      } else {
        return res.redirect("/users/login");
      }
    });
  },
  productEdit: function (req, res) {
    let productoId = req.params.id;

    if (req.session.user != undefined) {
      db.Producto.findByPk(productoId, {
        include: [{ association: "usuario" }],
      }).then(function (resultados) {
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
      } else {
        db.Producto.findByPk(form.id, {
          include: [
            { association: "usuario" },
            { association: "comentarios", include: [{ association: "usuario" }] },
          ],
        })
        .then(function (resultados) {
        return res.render("product-edit", {
          errors: errors.mapped(),
          old: req.body,
          productos: resultados,
        })
      })
    };
  },
  productComentarioStore: function (req, res) {
    let form = req.body;
    let usuarioId = req.session.user.id;
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let comentarioNuevo = {
        usuarioId: usuarioId,
        productoId: form.productoId,
        comentario: form.comentario,
      };

      db.Comentario.create(comentarioNuevo)
        .then(function () {
          return res.redirect("/product/" + form.productoId);
        })
        .catch(function (error) {
          console.log(error);
          return res.redirect("/product/" + form.productoId);
        });
    } else {
      db.Producto.findByPk(form.productoId, {
        include: [
          { association: "usuario" },
          { association: "comentarios", include: [{ association: "usuario" }] },
        ],
      })
      .then(function (resultados) {
        return res.render("product", {
          errors: errors.mapped(),
          old: req.body,
          productos: resultados,
        });
      });
    }
  },
};

module.exports = productController;
