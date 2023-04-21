const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const users = require('../database/users.json')

const LoginController = {
  login: (req, res) => {
      res.render('login')
  },
  perfil: (req, res) => {
    res.render('minha-conta')
  },
  loginEJS: (req, res) => {
    const user = users.find(user => user.email === req.body.email) // encontra o usuário através do e-mail - e retorna o objeto

    if (user && bcrypt.compareSync(req.body.pwd, user.pwd)) { // compara a senha recebida no body com a senha gravada no banco de dados
        const token = jwt.sign({ id: user.id, email: user.email }, 'segredo') // gera o token do usuário com JWT
        res.cookie('token', token, { maxAge: 2592000000 }) // expira em 30 dias

        res.redirect('/')
    } else res.render('login', { errors: [{ msg: "Usuário ou Senha incorretos!" }] })
  }
}

module.exports = LoginController