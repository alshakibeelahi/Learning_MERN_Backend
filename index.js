const express = require('express')
require('dotenv').config()
const app = express()
const port_number = process.env.FRONT_END_PORT_NO
const testing_routes = require('./routes/test')

app.listen(port_number, ()=>console.log(`This is running on port: ${port_number}`))


app.use('/test',testing_routes)