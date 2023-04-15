const express = require('express')
const router = express.Router()

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const loginController = require('../controllers/LoginController')
const CarrinhoController = require('../controllers/CarrinhoController')
const formularioController = require ('../controllers/FormularioController')
const userController = require('../controllers/UserController')


//Multer
const upload = require('../middlewares/upload')

//log
const  log = require('../middlewares/log')


//MainController
router.get('/', log, mainController.validacao)
router.get('/home',log ,mainController.index)
router.get('/search', mainController.search)
router.get('/aboutus', mainController.aboutus)
router.get('/contact', mainController.contact)
router.get('/terms', mainController.terms)
router.get('/privacy', mainController.privacy)
router.get('/blog', mainController.blog)
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

//UserController
 
// GET - EJS Create Form - View
router.get('/user', userController.createFormEJS)
// POST - EJS Create
router.post('/user',  userController.createEJS)

//ProductController
router.get('/product/detail/:id', productController.detailEJS)
router.get('/product/create',upload.any(), productController.createFormEJS)
router.get('/product/nossoproduto', productController.productView)
router.get('/product/update/:id', productController.updateFormEJS)
router.post('/product',  productController.createEJS)
router.put('/product/:id', productController.updateEJS)
router.delete('/product/:id', productController.deleteEJS)




module.exports = router