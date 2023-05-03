module.exports = (sequelize, DataType) => {
    const PerfilCompleto = sequelize.define('PerfilCompleto', {  
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: DataType.INTEGER,
        telefone: DataType.STRING(30),
        Cpf: DataType.STRING (15),
        cep: DataType.STRING(10),
        endereco: DataType.STRING(200),
        numero: DataType.INTEGER,
        complemento: DataType.STRING(100),
        cidade: DataType.STRING(100),
        foto_perfil: DataType.STRING(500),
    }, {
        timestamps: false,
        tableName: 'perfil_completo'
    }) ​
    PerfilCompleto.belongsTo('User', {
        foreignKey:"id_usuario"
    })
    return User
}