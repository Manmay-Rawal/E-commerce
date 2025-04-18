const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, server has started!');
});

// Port and Host
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://${HOST}:${PORT}`);
});
