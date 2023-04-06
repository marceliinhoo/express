const routes = require('./routes/index')
const path = require("path")
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require ('express-session')

// captura na forma de objeto literal tudo o que vem de um formulário
app.use(express.urlencoded({ extended: false }))
// converte as informações em formato JSON
app.use(express.json())

// instanciando como view engine
app.set("view engine", "ejs")
// instanciando pasta views
app.set("views", path.resolve(".", "views"))
// liberando acesso a pasta public
app.use(express.static(path.resolve("public")))

app.use(bodyParser.urlencoded({extended:true}))


/**
 * Rotas
 */
app.use(routes)


app.listen(3000, () => {
  console.log('Uhull, Servidor está Rodando!')
})