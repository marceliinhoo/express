const products = require('../database/products.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const MainController = {
  index: (req, res) => {
    res.render('index', {
      products,
      toThousand
    })
  },
  search: (req, res) => {
    let search = req.query.keywords
    let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search))
    res.render('results', {
      products: productsToSearch,
      search,
      toThousand,
    })
  },
  sobre: (req, res) => {
    res.render('sobrenos', { })
  },
  cadastro: (req, res) => {
    res.render('cadastro', { })
  },
  perfil: (req, res) => {
    res.render('minha-conta', { })
  },
}
module.exports = MainController