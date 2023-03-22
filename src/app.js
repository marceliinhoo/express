const path = require("path")
const express = require('express')
const app = express()
app.use(express.json())

const  routes = require('./routes/index')

 HEAD
// instanciando como view engine
app.set("view engine", "ejs")
// instanciando pasta views
app.set("views", path.resolve("src", "views"))
//liberando acesso a pasta public
app.use(express.static(path.resolve("public")))

app.set("view engine","ejs")



app.use(routes)


app.listen(3000, () => {
    console.log('Servidor rodando')
})



                  