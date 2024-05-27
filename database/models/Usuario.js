module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true, 
            type : dataTypes.INTEGER
        },
        usuario: {
            allowNull : false,
            type : dataTypes.STRING
        },
        email: {
            allowNull : false,
            type : dataTypes.STRING
        },
        contrasenia: {
            allowNull : false,
            type : dataTypes.STRING
        }, 
        fechaNacimiento: {
            allowNull : false,
            type : dataTypes.DATE
        },
        DNI: {
            allowNull : false,
            type : dataTypes.INTEGER
        },
        foto: {
            type : dataTypes.STRING
        },
        createdAt: {
            type : dataTypes.DATE
        },
        updatedAt: {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }

    let Usuario = sequelize.define(alias, cols, config);
    return Usuario;
  
}
