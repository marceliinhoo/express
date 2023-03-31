
const formularioController = {

cadastro: (req, res) => {
    res.render('cadastro', { })
  },
envio: (req, res) =>{
  console.log(req.body)
  res.send('FORMULÁRIO RECEBIDO')
},
} 

module.exports = formularioController 
