const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
const user = require('./routes/users')
const userNr = require('./routes/usersNr')
const middleware = require('./middlewares/logged')
//crea la conexion a la db
const connection = require('./connectionMysql')
const connectionnr = require('./connectionMongo')

//settings
app.set('title', 'App en node')
app.set('port', 3000)
//agregar motor de plantilla ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middlewares
//app.use(middleware.isLogged)
// app.use(express.static(__dirname+'/public'))
app.use(express.static(path.join(__dirname, 'public')))

//permite ver los datos que envia el cliente
app.use(express.urlencoded({extended:false}))

//routes
app.get('/',(req,res)=>{
    res.render('index');
});

app.use('/users',user);
app.use('/usersNr',userNr);

app.listen(app.get('port'),()=>{
    console.log(app.get('title')+' corriendo en puerto '+app.get('port'));
})