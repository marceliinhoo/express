const LoginController = {
  login: (req, res) => {
      res.render('login')
  },
  perfil: (req, res) => {
    res.render('minha-conta')
  },
  acess:(req,res) =>{
    if (req.body.password === '1234' && req.body.login === 'admin@admin.com.br') {
      res.render('minha-conta')
  }
}}

module.exports = LoginController