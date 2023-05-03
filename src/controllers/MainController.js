const { Product } = require('../models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const MainController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll()

      res.render('index', {
        products,
        toThousand
      })
    } catch (error) {
      res.status(400).json({ error })
    }
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
  privacy: (req, res) => {
    res.render('privacy', { })
  },
  blog: (req, res) => {
    res.render('blog', { })
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