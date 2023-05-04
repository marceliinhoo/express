module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {  
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dt_nasc: DataType.DATE,
        name: DataType.STRING(250),
        email: DataType.STRING(250),
        password: DataType.STRING(30),
    }, {
        timestamps: false,
        tableName: 'user'
    },
   /*  User.hasOne('Account', {
        foreignKey:"id_user"
    }) */)
    return User
}
