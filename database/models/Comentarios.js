module.exports = function (sequelize, dataTypes) {
    let alias = "Comentarios";
    
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true, 
            type : dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            foreignKey: true, 
        }, 
        producto_id: {
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
        timestamps: true,
        underscored: false
    }
  
let Comentario = sequelize.define(alias, cols, config);

return Comentario;

}
