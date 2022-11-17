const express = require('express') 
const messagesRouter = require('./routes/messages')
const usuariosRouter = require('./routes/usuarios')
const  motherRouter = require('./routes/mother')
const cors =require("cors")

class Server{
    constructor(){
      this.app = express()
      this.paths = {
         messages:"/api/v1/messages",
         usuarios:"/api/v1/usuarios",
         mother:"/api/v1/mother"

        }
       this.middlewares() 
      this.routes()
      

    }

routes(){
    
  //this.app.get('/', (req, res) => {
    //res.send('Hello World')
    //  }
    this.app.use(this.paths.messages, messagesRouter)
    this.app.use(this.paths.usuarios, usuariosRouter)
    this.app.use(this.paths.mother, motherRouter)
}

middlewares(){
  this.app.use(cors()) //Permiten solicitudes de origen cruzado//
  this.app.use(express.json()) //Habilita la lectura de contenido en formato JSON//
}




listen(){
    this.app.listen(process.env.PORT,() => { //Poner un this aqui xd//
    console.log("Backend en ejecución en el puerto", process.env.PORT)})
}
}

module.exports = Server