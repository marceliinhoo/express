const { validationResult } = require('express-validator')
const products = require('../database/products.json')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const ProductController = {
  productView: (req, res) => {
		res.render('product', {
			products,
			toThousand
		})
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

  /**
   * EJS
   */
  // Detail from one product
	detailEJS: (req, res) => {
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('detail', {
			product,
			toThousand
		})
	},
  // Create form product - View
  createproduct: (req, res) => {
    res.render('product-create-form')
  },
  // Create product
  createEJS: (req, res) => {
    let image = ''
    const errors = validationResult(req)
    if (!errors.isEmpty())
        res.render('product-create-form', { errors: errors.mapped() }) // ou array()

    if (req.files[0] !== undefined) {
        image = req.files[0].filename
    } else {
        image = 'default-image.png'
    }
    let newProduct = {
			id: Number(products[products.length - 1].id) + 1,
			...req.body,
      image: image
		}
    products.push(newProduct)
    res.redirect('/home')
  },
  // Update form product - View
  updateFormEJS: (req, res) => {
    let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('product-edit-form', { productToEdit })
  },
  // Update product
  updateEJS: (req, res) => {
    const { id } = req.params
    let image = ''
    
    const productIndex = products.findIndex(product => String(product.id) === id) // índice
    let productToEdit = products.find(product => product.id == id) // objeto
    
    if (productIndex != -1) {
        if (req.files[0] !== undefined) {
            image = req.files[0].filename
        } else {
            image = productToEdit.image
        }

        productToEdit = {
          id: productToEdit.id,
          ...req.body,
          image: image
        }

        products[productIndex] = productToEdit // atualiza

        res.redirect('/')
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  },
  // Delete product
  deleteEJS: (req, res) => {
    const { id } = req.params
    
    const productIndex = products.findIndex(product => String(product.id) === id)
  
    if (productIndex != -1) {
        products.splice(productIndex, 1)
        res.redirect('/home')
    }
    else return res.status(400).json({ error: 'Produto não encontrado.' })
  }
}
module.exports = ProductController