module.exports = (sequelize, DataType) => {

    const TypeBeer = sequelize.define('TypeBeer', {  
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
  
      },
      name: DataType.STRING(100),
    }, {
      timestamps: false,
      tableName: 'type_beer'
    })
    return TypeBeer
  }