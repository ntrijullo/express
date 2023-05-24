const mysql = require('mysql')
const mongoose = require('mongoose')
const {mysql_database,mongodb} = require('./config')

//mysql
const connection = mysql.createConnection(mysql_database)

connection.connect((err, conn) => {
    if(err){
        console.log('ha ocurrido un error ')
    }else{
        console.log('conexion exitosa')
        return conn
    }
})

//mongodb
const uri = `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`
const connectionnr = mongoose.connect(uri)
.then((db)=> {
    console.log('Conexion existosa')    
}).catch((err)=>{
    console.log('Ha ocurrido un error: '+err)
})

module.exports = connection,connectionnr