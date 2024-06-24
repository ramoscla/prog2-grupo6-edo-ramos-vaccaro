const db = require("../database/models");

const indexController = {
  index: function (req, res) {
    db.Producto.findAll({
      include: [{ association: "usuario" }, { association: "comentarios" }],
      order: [["createdAt", "DESC"]],
    })
      .then((resultados) => {
        res.render("index", { productos: resultados });
      })
      .catch((error) => {
        console.log(error);
        res.send("Ocurrió un error");
      });
  },
  searchResults: function (req, res) {
    let objeto = req.query.search;
    let op = db.Sequelize.Op;
    db.Producto.findAll({
      where: [{ nombre: { [op.like]: `%${objeto}%` } }],
    }).then((resultados) => {
      res.render("search-results", { productos: resultados });
    });
  },
};

module.exports = indexController;
