const isLogged = (req,res,next)=>{
    let logged = false
    if(logged){
        next();
    }else{
        res.send('No esta logeado')
    }            
}

exports.isLogged = isLogged
