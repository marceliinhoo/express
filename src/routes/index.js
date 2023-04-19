const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

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
router.get('/login/minha-conta', loginController.perfil)
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

// # Product
router.get('/product/nossoproduto', productController.productView)
// GET - EJS Detail - View
router.get('/product/detail/:id', productController.detailEJS)
// GET - EJS Create Form - View
router.get('/product/create', productController.createproduct)
// GET - EJS Update Form - View
router.get('/product/update/:id', auth, productController.updateFormEJS)
// POST - EJS Create
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
// PUT - EJS Update
router.put('/product/:id', auth, upload.any(), productController.updateEJS)
// DELETE - EJS Delete
router.delete('/product/:id', auth, productController.deleteEJS)


module.exports = router
