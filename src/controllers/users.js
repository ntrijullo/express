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
    res.render('update-user')
}

const getDeleteUser = (req,res) =>{
    res.render('delete-user')
}

const createUser = (req, res) =>{
    const sql = 'insert into users SET ?'
    const data = req.body
    connection.query(sql, data, (err, result)=>{
        if(err){
            console.log('ha ocurrido un error')
        }else{
            console.log('Usuario registrado')
            res.redirect('/users/all')
        }
    })
}

const updateUser = (req, res) =>{
    const param = req.params.id
    for (let i = 0; i < users.length; i++) {
        if(param == users[i].id){
            users[i].name = req.body.name
            users[i].age = req.body.age
            break
        }
    }
    res.render('users', {users:users})
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