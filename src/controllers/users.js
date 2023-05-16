const getUsers = (req,res) =>{
    res.send('Mostrar usuarios')
}

const createUser = (req,res) =>{
    res.send('Crear usuario')
}

const updateUser = (req,res) =>{
    res.send('Actualizar usuario')
}

const deleteUser = (req,res) =>{
    res.send('Eliminar usuario')
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}