const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
const user = require('./routes/users')
const middleware = require('./middlewares/logged')

//middlewares
//app.use(middleware.isLogged)
// app.use(express.static(__dirname+'/public'))
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.get('/',(req,res)=>{
    res.send('Bienvenidos');
});

app.use('/users',user);

app.listen(port,()=>{
    console.log('Server por puerto 3000');
})