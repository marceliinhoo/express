const LoginController = {
  login: (req, res) => {
    res.render('login', {
    })
  },
  perfil: (req, res) => {
    res.render('minha-conta', { })
  },
  acess: (req, res) => {
    const email = 'bia_Schoti@hotmail.com';
    const password = 1234
    if (req.body.email === 'email' && req.body.password === 'senha') {
      req.session.authenticated = true;
      res.redirect('/minha-conta');
    } else {
      res.send('/home');
    }
  },

}

module.exports = LoginController