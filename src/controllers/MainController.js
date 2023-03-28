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
    res.render('validacao', { })
  },
  sobre: (req, res) => {
    res.render('sobrenos', { })
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
    let age = req.query.Yes
    if (age == req.query.Yes) {
    res.redirect('/home');
    }/*  else {
      res.send('Você não pode acessar o site')
    } */
    console.log(age)
  },
}

module.exports = MainController