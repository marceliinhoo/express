const LoginController = {
  login: (req, res) => {
      res.render('login')
  },
  perfil: (req, res) => {
    res.render('minha-conta', { })
  },
  acess:(req,res) =>{
    var login = 'admin@admin.com.br'
    var password ='1234'
    if(req.body.password == password && req.body.login == login){
      res.redirect('minha-conta')
    } else{
      res.render('/cadastro')
    }
  },
}


module.exports = LoginController