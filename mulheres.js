const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
       nome: 'Solange santos' ,
       imagem: 'https://1drv.ms/i/s!Agy24ITxOz0UmA_PJxYbOtoawBTT?e=WlhPH2' ,
       minibio:'Sou aluna no curso de progamaria'
    },
    {
       nome:'Atonia Santos' ,
       imagem: 'https://1drv.ms/i/s!Agy24ITxOz0UmABKN7TCft2A_BkB?e=R1dquH' ,
       monibio:'Formanda em Educação Física'
    },
    {
        nome:'Rita da Conceicao' ,
        imagem: 'https://1drv.ms/i/s!Agy24ITxOz0UgwSC4LadTm05GYDT?e=I1mT0x' ,
        monibio:'Racker antirracista'
    }
]

function mostraMUlheres(request , response){
    response.json(mulheres)
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta " , porta )
}

app.use(router.get('/mulheres' , mostraMUlheres))
app.listen(porta , mostraPorta)