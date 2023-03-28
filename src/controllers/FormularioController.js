
const formularioController = {

cadastro: (req, res) => {
    res.render('cadastro', { })
  },
envio: (req, res) =>{
  res.send('FORMULÁRIO RECEBIDO')
},
} 

module.exports = formularioController 
