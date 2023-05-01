

module.exports = (sequelize, DataType) => {

    const Product = sequelize.define('Product', {  
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
  
      },
      name: DataType.STRING(100),
      description: DataType.STRING(1000),
      price: DataType.DECIMAL(10, 2),
      image: DataType.STRING(500),
      id_type: DataType.INTEGER
    }, {
      timestamps: false,
      tableName: 'product'
  
    }) ​
    return Product
  }
  
  