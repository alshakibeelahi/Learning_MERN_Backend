const express = require('express')
require('dotenv').config()
const app = express()
const port_number = process.env.FRONT_END_PORT_NO

app.listen(port_number, ()=>console.log(`This is running on port: ${port_number}`))

