const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const loginController = require('../controllers/LoginController')
const CarrinhoController = require('../controllers/CarrinhoController')



router.get('/sobrenos', mainController.sobre)
router.get('/cadastro', mainController.cadastro)
router.get('/minha-conta', mainController.perfil)

router.get('/', mainController.index)
router.get('/search', mainController.search)
router.get('/', productController.slice)
/* router.post('/home',mainController.age) */

//LoginController
router.get('/login', loginController.login)


//CarrinhoController
/* router.get('/:item', CarrinhoController.addItem) */
router.get('/carrinho', CarrinhoController.carrinho)




//ProductController
router.get('/product/detail/:id', productController.detailEJS)
router.get('/product/create', productController.createFormEJS)
router.get('/product/nossoproduto', productController.productView)
router.get('/product/update/:id', productController.updateFormEJS)
router.post('/product', productController.createEJS)
router.put('/product/:id', productController.updateEJS)
router.delete('/product/:id', productController.deleteEJS)



module.exports = router