const express = require('express');
const app = express();

// Enable CORS
const cors = require('cors');
app.use(cors({
  origin: '*'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connection to Database
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

// Call the connectDB function to establish MongoDB connection
connectDB();

const port_number = process.env.FRONT_END_PORT_NO || 3000; // Default to port 3000 if not specified in .env
app.listen(port_number, () => console.log(`Server is running on port: ${port_number}`));


//Main Url
app.get('/', (req, res) => {
  res.send('Rest Api in MVC With Mongodb is Running')
})

// Taking API calls
const testing_routes = require('./routes/userRoutes');
app.use('/user', testing_routes);
