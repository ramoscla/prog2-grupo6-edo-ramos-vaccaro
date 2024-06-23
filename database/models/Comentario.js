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
        
    }

    let config = {
        tableName: "comentarios",
        timestamps: false,
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
        foreingKey: "productoId"
    })}; 
return Comentario;

}
  


