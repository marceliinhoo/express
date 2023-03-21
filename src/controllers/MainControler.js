const products = require('../database/products.json')

const MainControler = {
    index: ( req, res) => {
        res.render('index', { products })
    }
}
module.exports = MainControler