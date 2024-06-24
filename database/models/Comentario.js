module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true, 
            type : dataTypes.INTEGER
        },
        usuarioId: {
            type: dataTypes.INTEGER,
            foreignKey: true, 
        }, 
        productoId: {
            type: dataTypes.INTEGER, 
            foreignKey: true, 
        },
        comentario: {
            allowNull : false,
            type : dataTypes.STRING

        }, 
         createdAt: {
            type: dataTypes.DATE,
          },
          updatedAt: {
            type: dataTypes.DATE,
          },
          deletedAt: {
            type: dataTypes.DATE,
          }
         
    };
  
    

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    }
  
let Comentario = sequelize.define(alias, cols, config);

Comentario.associate = function(models){
    Comentario.belongsTo(models.Usuario,{
        as: "usuario",
        foreignKey:"usuarioId"
    }),
    Comentario.belongsTo(models.Producto, {
        as:"producto",
        foreignKey: "productoId"
    })}; 
return Comentario;

}
  


