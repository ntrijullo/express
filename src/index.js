const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Bienvenidos');
});

app.get('/users',(req,res)=>{
    res.send('mostrando usuarios');
});

app.listen(port,()=>{
    console.log('Server por puerto 3000');
})