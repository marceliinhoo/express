const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

const mainController = require('../controllers/MainController')
const productController = require('../controllers/ProductController')
const loginController = require('../controllers/LoginController')
const CarrinhoController = require('../controllers/CarrinhoController')
const formularioController = require ('../controllers/FormularioController')

//Multer
const upload = require('../middlewares/upload')
//log
const  log = require('../middlewares/log')
//auth
const auth = require('../middlewares/auth')

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
router.get('/login/minha-conta', auth, loginController.perfil)
router.post('/login/minha-conta', loginController.loginEJS)

//FormularioController
router.get('/formulario', formularioController.cadastro)
router.post(
  '/cadastro',
  body('name')
    .notEmpty()
    .withMessage('Nome Completo deve ser informado!'),
    body('email')
    .notEmpty()
    .withMessage('Campo E-mail deve ser preenchido'),
    formularioController.createEJS
)
//CarrinhoController
router.get('/carrinho', CarrinhoController.carrinho)

// # Product
router.get('/product/nossoproduto', productController.productView)
router.get('/product/detail/:id', productController.detailEJS)
router.get('/product/create',  auth, productController.createproduct)
router.get('/product/update/:id',  productController.updateFormEJS)
router.post(
  '/product',
  upload.any(),
  body('name')
    .notEmpty()
    .withMessage('Nome do Produto deve ser informado!'),
  body('description')
    .notEmpty()
    .withMessage('Descrição deve ser informada!'),
  productController.createEJS
)
router.put('/product/:id', upload.any(), productController.updateEJS)
router.delete('/product/:id', auth, productController.deleteEJS)

module.exports = router
