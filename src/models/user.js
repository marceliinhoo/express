

module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {  
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING(250),
        dt_nasc: DataType.DATE,
        email: DataType.STRING(250),
        senha: DataType.STRING(30),
    }, {
        timestamps: false,
        tableName: 'usuario'
    }) ​
    User.hasOne('PerfilCompleto', {
        foreignKey:"id_usuario"
    })
    return User
}