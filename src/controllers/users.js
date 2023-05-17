const users = [
    {id:1,name:'enzo',age:'33'},
    {id:2,name:'nelson',age:'33'},
    {id:3,name:'epson',age:'33'}
]

const getUsers = (req,res) =>{
    res.render('users', {users:users})
}

const createUser = (req,res) =>{
    res.render('create-user')
}

const updateUser = (req,res) =>{
    res.render('update-user')
}

const deleteUser = (req,res) =>{
    res.render('delete-user')
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}