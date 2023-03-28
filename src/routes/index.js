const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const loginController = require('../controllers/LoginController')
const CarrinhoController = require('../controllers/CarrinhoController')
const formularioController = require ('../controllers/FormularioController')



//MainController
router.get('/', mainController.validacao)
router.get('/home', mainController.index)
router.get('/search', mainController.search)
router.get('/sobrenos', mainController.sobre)
router.post('/verificar-idade', mainController.age)

//LoginController
router.get('/login', loginController.login)
router.post('/login/minha-conta', loginController.acess)




//CarrinhoController
/* router.get('/:item', CarrinhoController.addItem) */
router.get('/carrinho', CarrinhoController.carrinho)

//FormularioController
router.get('/cadastro', formularioController.cadastro)
router.post('/add',formularioController.envio)


//ProductController
router.get('/product/detail/:id', productController.detailEJS)
router.get('/product/create', productController.createFormEJS)
router.get('/product/nossoproduto', productController.productView)
router.get('/product/update/:id', productController.updateFormEJS)
router.post('/product', productController.createEJS)
router.put('/product/:id', productController.updateEJS)
router.delete('/product/:id', productController.deleteEJS)



module.exports = router