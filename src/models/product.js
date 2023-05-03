

module.exports = (sequelize, DataType) => {

    const Product = sequelize.define('Product', {  
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
  
      },
      nome: DataType.STRING(100),
      descricao: DataType.STRING(1000),
      preco: DataType.DECIMAL(10, 2),
      imagem: DataType.STRING(500),
      idtype_beer: DataType.INTEGER
    }, {
      timestamps: false,
      tableName: 'product'
  
    }) ​
    return Product
  }
  
  