module.exports = function (sequelize, dataTypes) {
  let alias = "Producto";

  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER,
    },
    nombre: {
      type: dataTypes.STRING,
    },
    foto: {
      type: dataTypes.STRING,
    },
    descripcion: {
      type: dataTypes.STRING,
    },
    createdAt: {
      type: dataTypes.DATE,
    },
    updatedAt: {
      type: dataTypes.DATE,
    },
    deletedAt: {
      type: dataTypes.DATE,
    },
    usuarioId: {
      type: dataTypes.INTEGER,
    },
  };

  let config = {
    tableName: "productos",
    timestamps: true,
    underscored: false,
  };

  let Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
    Producto.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "usuarioId",
    });

    Producto.hasMany(models.Comentario, {
      as: "comentarios",
      foreignKey: "productoId",
    });
  };

  return Producto;
};
