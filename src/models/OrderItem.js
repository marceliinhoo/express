module.exports = (sequelize, DataType) => {

    const OrderItem = sequelize.define('OrderItem', {  
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true

      },
      id_cart: DataType.INTEGER,
      id_product: DataType.INTEGER,
      quant: DataType.STRING(45),
    }, {
      timestamps: false,
      tableName: 'ordr_item'
    })
    return OrderItem
  }
  