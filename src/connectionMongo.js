const mongoose = require('mongoose')
const {mongodb} = require('./config')

//mongodb
const uri = `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`
const connectionnr = mongoose.connect(uri)
.then((db)=> {
    console.log('Conexion existosa')    
}).catch((err)=>{
    console.log('Ha ocurrido un error: '+err)
})

module.exports = connectionnr