const express = require('express')
app = express()
require('express-async-errors')

const db = require('./db')
const bodyParser = require('body-parser')
usersRoutes = require('./controllers/users')

//middleware
app.use(bodyParser.json())
app.use('/api/users', usersRoutes)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('something went wrong')
})


db.query('SELECT 1')
.then(() => {
    console.log('connection succeed')
    app.listen(5000, () => console.log('server started at 5000'))
})
.catch(err => console.log('db connection failed. \n' + err))

