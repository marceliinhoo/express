const products = require('../database/products.json')

const LoginController = {
  login: (req, res) => {
    res.render('login', {
    })
  },
  acess: (req, res) => {
    if (req.body.username === 'usuario' && req.body.password === 'senha') {
      req.session.authenticated = true;
      res.redirect('/minha-conta');
    } else {
      res.send('Credenciais inválidas');
    }
  },
}


module.exports = LoginController