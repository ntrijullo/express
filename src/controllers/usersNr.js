const User = require('../models/usersNr')

const getUsers = (req,res) =>{

    User.find({}, (err, result)=>{
        if(err){
            console.log('ha ocurrido un error')
        }else{
            console.log(result)
            res.render('usersNr/users', {users:result})
        }
    })
}

const getCreateUser = (req,res) =>{
    res.render('usersNr/create-user')
}

const getUpdateUser = (req,res) =>{
    const param = req.params.id
    const sql = 'select * from users where id = ?'
    connection.query(sql, param, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)
            res.render('usersNr/update-user', {user:result})
        }
    })
}

const getDeleteUser = (req,res) =>{
    const param = req.params.id
    const sql = 'select * from users where id = ?'
    connection.query(sql, param, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)
            res.render('usersNr/delete-user', {user:result})
        }
    })

}

const createUser = (req, res) =>{
    
    const data = req.body
    const user = new User({
        name: data.name,
        age: data.age
    })
    user.save((err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log('Usuario registrado')
            res.redirect('/usersNr/all')
        }
    })
}

const updateUser = (req, res) =>{
    const param = req.params.id
    const sql = `update users SET name= '${req.body.name}' , age= ${req.body.age} where id= ${param}`

    connection.query(sql,(err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log('Usuario actualizado')
            res.redirect('/usersNr/all')
        }
    })
}

const deleteUser = (req, res) =>{
    const param = req.params.id
    const sql = 'delete from users where id = ?'
    connection.query(sql, param, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)
            res.redirect('/usersNr/all')
        }
    })
}

module.exports = {
    getUsers,
    getCreateUser,
    getUpdateUser,
    getDeleteUser,
    createUser,
    updateUser,
    deleteUser
}