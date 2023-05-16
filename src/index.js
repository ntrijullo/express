const express = require('express');
const app = express();
const port = 3000;
const user = require('./routes/users')

app.get('/',(req,res)=>{
    res.send('Bienvenidos');
});

app.use(user);

app.listen(port,()=>{
    console.log('Server por puerto 3000');
})