const connection = require('../connection')

const getUsers = (req,res) =>{
    const sql = 'select * from users'
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('ha ocurrido un error')
        }else{
            console.log(result)
            res.render('users', {users:result})
        }
    })
}

const getCreateUser = (req,res) =>{
    res.render('create-user')
}

const getUpdateUser = (req,res) =>{
    const param = req.params.id
    const sql = 'select * from users where id = ?'
    connection.query(sql, param, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)
            res.render('update-user', {user:result})
        }
    })
}

const getDeleteUser = (req,res) =>{
    res.render('delete-user')
}

const createUser = (req, res) =>{
    const sql = 'insert into users SET ?'
    const data = req.body
    connection.query(sql, data, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log('Usuario registrado')
            res.redirect('/users/all')
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
            res.redirect('/users/all')
        }
    })
}

const deleteUser = (req, res) =>{
    const param = req.params.id
    for (let i = 0; i < users.length; i++) {
        if(param == users[i].id){
            users.splice(i,1)
            break
        }   
    }
    res.render('users', {users:users})
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