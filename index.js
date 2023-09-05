const express = require('express');
require('dotenv').config();
const app = express();

// Enable CORS
const cors = require('cors'); 
app.use(cors({
  origin: '*'
}));
app.use(express.urlencoded({ extended: true })); //parses form data requests with URL-encoded payloads and is based on a body parser
app.use(express.json()); //returns a JSON object

// Connection to Database
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(`Connected to MongoDB`);
})

const port_number = process.env.FRONT_END_PORT_NO || 3000;
app.listen(port_number, () => console.log(`Server is running on port: ${port_number}`));

//making folder publicly accessable through link
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

//parse cookie
const cookieParser = require('cookie-parser')
app.use(cookieParser(process.env.COOKIE_SECRET))

//Testing Main API Running
app.get('/', (req, res) => {
  res.send('Rest Api in MVC With Mongodb is Running')
})

// User CRUD routes
const user_routes = require('./routes/userRoutes');
app.use('/user', user_routes);

// Authentication routes
const auth_routes = require('./routes/authRoutes');
app.use('/auth', auth_routes);

//error handler
const {notFoundHandler, errorHandler} = require('./middleware/common/errorHandler')
//---> for not found
app.use(notFoundHandler)
//---> for error handing
app.use(errorHandler)


