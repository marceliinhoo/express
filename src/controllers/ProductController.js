
const products = require('../database/products.json')

const ProductController = {
    todosProdutos(req, res){
        res.send(products)
    },
    produtosByID(req, res){
        const { id } = req.params
    
        const product = products.find(product => String(product.id)  === id)
        if (product)
            return res.json(product)
    
        else return res.status(400).json({ error: 'Produto não encontrado'})
           
    },

    create(req, res){
    
        products.push(req.body)
        res.send(products)
    },

    update(req, res){
        const { id } = req.params
    
        const productIndex = products.findIndex(product => String(product.id)  === id)
    
        if (productIndex != -1){
            products[productIndex] = req.body
            return res.json(products)
        }
            
        else return res.status(400).json({ error: 'Produto não encontrado'})
        
    },

    delete(req, res){
        const { id } = req.params
    
        const productIndex = products.findIndex(product => String(product.id)  === id)
    
    
        if (productIndex != -1){
            products.splice(productIndex, 1)
            return res.json(products)
        }
        else return res.status(400).json({ error: 'Produto não encontrado'})
        
        
    }

}

module.exports = ProductController

