const { validationResult } = require('express-validator')
/* const products = require('../database/products.json') */
const { Product, TypeBeer } = require('../models')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const ProductController = {
   productView: async (req, res) => {
	try {

    const products = await Product.findAll()
    res.render('product', {
			products,
			toThousand
		})

	} catch (error){
    res.status(400).json({ error })
  }
},

  showAll: (req, res) => {
    res.json(products)
  },
  showById: (req, res) => {
    const { id } = req.params
    
    const product = products.find(product => String(product.id) === id)
  
    if (product)
        return res.json(product)
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  create: (req, res) => {
    products.push(req.body)
    res.json(products)
  },
  update: (req, res) => {
    const { id } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id)
  
    if (productIndex != -1) {
        products[productIndex] = req.body
        return res.json(products)
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  delete: (req, res) => {
    const { id } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id)
  
    if (productIndex != -1) {
        products.splice(productIndex, 1)
        return res.json(products)
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },

	detailEJS: async (req, res) => {
		let id = req.params.id
		try { 
      const product = await Product.findOne({
        where: {
          id: id
        },
        include: {
          model: TypeBeer,
          as: 'typeBeer',
          require: true
        }
      })
      
		res.render('detail', {
			product,
			toThousand
		})
	} catch (error){
    res.status(400).json({ error })
  }
},

detailQuant:(req, res) => {
  const botao = req.body.botao;
  let valorAtual = parseInt(req.body.valor);
  if (botao === 'mais') {
    valorAtual++;
  } else if (botao === 'menos') {
    valorAtual--;
  }
  res.render('detail', { valor: valorAtual });
},
  createproduct: (req, res) => {
    res.render('product-create-form')
  },

  createEJS: async (req, res) => {
    let image = ''

    const errors = validationResult(req)
    if (!errors.isEmpty())
        res.render('product-create-form', { errors: errors.mapped() }) // ou array()

    try {
      if (req.files[0] !== undefined) {
        image = req.files[0].filename
      } else {
        image = 'default-image.png'
      }
      
      let newProduct = {

        ...req.body,
        image: image
      }

      await Product.create(newProduct) // cria o registro no banco de dados

      res.redirect('/product/nossoproduto')
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Update form product - View
  updateFormEJS: async (req, res) => {
    const id = req.params.id

    try {
      const productToEdit = await Product.findByPk(id)

      res.render('edit-form', { productToEdit })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Update product
  updateEJS: async (req, res) => {
    const { id } = req.params
    let image = ''
    
    try {
      const productToEdit = await Product.findByPk(id)
    
      if (productToEdit != undefined) {
          if (req.files[0] !== undefined) {
              image = req.files[0].filename
          } else {
              image = productToEdit.image
          }

          let product = {
            ...req.body,
            image: image
          }

          await Product.update(
            product,
            {
              where: {
                id: id
              }
            }
          ) // atualiza o registro no banco de dados

          res.redirect('/product/nossoproduto')
      } else return res.status(400).json({ error: 'Produto não encontrado.' })

    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // Delete product
  deleteEJS: async (req, res) => {
    const { id } = req.params

    try {
      await Product.destroy({
        where: {
          id: id
        }
      }) // remove o registro do banco de dados

      res.redirect('/product/nossoproduto')
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}
module.exports = ProductController