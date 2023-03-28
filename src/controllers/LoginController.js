const LoginController = {
  login: (req, res) => {
    res.render('login', {
    })
  },
  perfil: (req, res) => {
    res.render('minha-conta', { })
  },
  acess: (req, res) => {
    if (req.body.email === 'email' && req.body.password === 'senha') {
      req.session.authenticated = true;
      res.redirect('/minha-conta');
    } else {
      res.send('Credenciais inválidas');
    }
  },
}




module.exports = LoginController