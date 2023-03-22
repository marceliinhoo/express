const express = require('express')
const router = express.Router()

const main = require ('../controllers/MainControler')

const productController = require('../controllers/ProductController')

// # Main
//GET ALL
app.get('/', mainControler.index )


//produtos

//# GET ALL
app.get('/pessoa', productController.todosProdutos )

//# GET by ID
app.get('/pessoa/:id', productController.produtosByID)
//# POST
app.post('/pessoa',productController.create )

//# PUT
app.put('/pessoa/:id',productController.update )

//# DELETE
app.delete('/pessoa/:id',productController.delete )



module.exports = router