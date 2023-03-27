const products = require('../database/products.json')
const LoginController = {
  login: (req, res) => {
    res.render('login', {
    })
  },
  acess: (req, res) => {
    if (req.body.username === 'usuario' && req.body.password === 'senha') {
      req.session.authenticated = true;
      res.redirect('/perfil');
    } else {
      res.send('Credenciais inválidas');
    }
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
}


module.exports = LoginController