const express = require("express") 
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
       nome: 'Simara Conceição' ,
       imagem: 'https://avatars.githubusercontent.com/u/50921892?v=4' ,
       minibio:'Desenvovedora e instrutora'
    },
    {
       nome:'Iana Chan' ,
       imagem: 'https://media.licdn.com/dms/image/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_800_800/0/1686007268307?e=1715817600&v=beta&t=G82SJ-4bOdQd_Kon5W5pGCz2dZ6r7USX35hLAM8XVL8' ,
       monibio:'Fundadora da PrograMaria'
    },
    {
        nome:'Nina da Hora' ,
        imagem: 'https://bit.ly/3FKpFaz' ,
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