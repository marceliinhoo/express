const LoginController = {
  login: (req, res) => {
      res.render('login')
  },
  perfil: (req, res) => {
    res.render('minha-conta')
  },
}

module.exports = LoginController