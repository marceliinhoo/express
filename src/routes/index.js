const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

//produtos

app.get('/pessoa', ProductController.todosProdutos )

//# 1
app.get('/pessoa/:id', ProductController.produtosByID)

app.post('/pessoa',ProductController.create )

//# 2
app.put('/pessoa/:id',ProductController.update )

//# 3
app.delete('/pessoa/:id',ProductController.delete )



module.exports = router