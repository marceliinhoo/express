const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const users = require('../database/users.json')
const formularioController = {

cadastro: (req, res) => {
    res.render('formulario', { })
  },
  createEJS: (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
        res.render('formulario', { errors: errors.mapped() }) // ou array()
    const user = users.find(user => user.email === req.body.email) // encontra o usuário através do e-mail - e retorna o objeto
    if (!user) {
        let newUser = {
          id: users.length > 0 ? Number(users[users.length - 1].id) + 1 : 1,
          ...req.body
        }
        // delete newUser.pwdConfirm // remove propriedade pwdConfirm - porque não é necessário gravar no banco
        const hash = bcrypt.hashSync(newUser.password, 10) // gera o hash da senha
        newUser.password = hash // salva na propriedade senha
        users.push(newUser)
        res.redirect('/home')
    } else res.render('formulario', { errors: [{ msg: "Usuário já cadastrado!" }] })
  },
}
/* console.log('users', users) */

module.exports = formularioController 
