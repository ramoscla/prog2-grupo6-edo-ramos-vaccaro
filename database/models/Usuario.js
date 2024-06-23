module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true, 
            type : dataTypes.INTEGER
        },
        usuario: {
            type : dataTypes.STRING
        },
        email: {
            type : dataTypes.STRING
        },
        contrasenia: {
            type : dataTypes.STRING
        }, 
        fechaNacimiento: {
            type : dataTypes.DATE
        },
        DNI: {
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
    
    Usuario.associate = function(models) {
       
        Usuario.hasMany(models.Comentario, {
            as: 'comentarios',
            foreignKey: 'usuarioId'
        });


        Usuario.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'usuarioId'
        });
    }

    return Usuario;

}
