const products = require('../database/products.json')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const MainController = {
  index: (req, res) => {
    res.render('index', {
      products,
      toThousand
    })
  },
  validacao: (req, res) => {
    res.render('validacao')
  },
  aboutus: (req, res) => {
    res.render('sobrenos', { })
  },
  contact: (req, res) => {
    res.render('contact', { })
  },
  terms: (req, res) => {
    res.render('terms', { })
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
  age: (req, res) => {
    if (req.body.age === 'Sim') {
        res.render('index')
    } else res.send('Você não pode acessar o site')
  },
}
module.exports = MainController