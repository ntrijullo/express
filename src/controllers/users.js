const connection = require('../connectionMysql')

const getUsers = (req,res) =>{
    const sql = 'select * from users'
    connection.query(sql, (err, result)=>{
        if(err){
            console.log('ha ocurrido un error')
        }else{
            console.log(result)
            res.render('users/users', {users:result, db:'mysql'})
        }
    })
}

const getCreateUser = (req,res) =>{
    res.render('users/create-user')
}

const getUpdateUser = (req,res) =>{
    const param = req.params.id
    const sql = 'select * from users where id = ?'
    connection.query(sql, param, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)
            res.render('users/update-user', {user:result})
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
            res.render('users/delete-user', {user:result})
        }
    })

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
    const sql = 'delete from users where id = ?'
    connection.query(sql, param, (err, result)=>{
        if(err){
            console.log('Ha ocurrido un error')
        }else{
            console.log(result)
            res.redirect('/users/all')
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