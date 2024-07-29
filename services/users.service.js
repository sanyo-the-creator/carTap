const db = require('../db')

module.exports.getAllUsers = async () => {
    const [users] = await db.query("SELECT * FROM users")
    return users
}

module.exports.getUserById = async (id) => {
    const [user] = await db.query("SELECT * FROM users WHERE id = ?", [id])
    return user
}

module.exports.deleteUser = async (id) => {
    const [{affectedRows}] = await db.query("DELETE FROM users WHERE id = ?", [id])
    return affectedRows
}

module.exports.addOrEditUser = async (object, id = 0) => {
    const [[[{affectedRows}]]] = await db.query("CALL usp_user_add_or_edit(?, ?, ?, ?)", [id, object.username, object.email, object.password])
    return affectedRows
}

