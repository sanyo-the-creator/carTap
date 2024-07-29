const express = require('express')
const router = express.Router()
const db = require('../db')
const service = require('../services/users.service')

router.get('/',async (req, res) => {
        const users = await service.getAllUsers()
    res.send(users)
})

router.get('/:id', async (req, res) => {
    const user = await service.getUserById(req.params.id)
    if(user.length == 0)
        res.status(404).json({message: 'no record for that'})
    else
        res.send(user)
})

router.delete('/delete/:id', async (req, res) => {
    const affectedRows = await service.deleteUser(req.params.id)
    if(affectedRows == 0)
        res.status(404).json({message: 'no record for that'})
    else
        res.send(deletedUser)
})

router.post('/register', async (req, res) => {
    const affectedRows = await service.addOrEditUser(req.body)
    res.status(201).json({message: 'user created succesfully'})
})

router.put('/:id', async (req, res) => {
    const data = await service.addOrEditUser(req.body, req.params.id)
    if(affectedRows == 0)
        res.status(404).json({message: 'no record for that'})
    else
        res.send('updated successfully')
})
module.exports = router 