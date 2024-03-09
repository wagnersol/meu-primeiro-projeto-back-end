const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333 

function mostraMulher(request , response){
   response.json({
    nome:'Solange santos' ,
    imagem:'https://1drv.ms/i/s!Agy24ITxOz0UmA_PJxYbOtoawBTT?e=WlhPH2' ,
    minibio:'sou aluna no curso de progamaria'
   })
}


function mostraPorta() {
    console.log("servidor criado e rodando na porta " , porta )
}

app.use(router.get('/mulher' , mostraMulher))
app.listen(porta , mostraPorta)