// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Create a MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'yoga_admissions_db',
//   password: 'root',
//   database: 'yoga_admissions_db',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });

// // Middleware
// app.use(bodyParser.json());

// // Define API routes
// app.post('/submitForm', (req, res) => {
//   // Extract form data from the request
//   const { name, age, selectedBatch } = req.body;

//   // Perform any validation or processing here

//   // Insert data into MySQL database
//   const query = `INSERT INTO yoga_admissions (name, age, selectedBatch) VALUES (?, ?, ?)`;
//   connection.query(query, [name, age, selectedBatch], (error, results, fields) => {
//     if (error) {
//       console.error('Error inserting data into MySQL:', error);
//       res.status(500).json({ success: false, error: 'Internal Server Error' });
//       return;
//     }

//     console.log('Data inserted into MySQL:', results);
//     res.status(200).json({ success: true, message: 'Data inserted successfully' });
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://Admin:Google12345@cluster0.jwirium.mongodb.net/yoga_admissions_db'
);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Middleware
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Define the MongoDB schema and model
const admissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  selectedBatch: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Admission = mongoose.model('Admission', admissionSchema);

// API endpoint to handle form submissions
app.post('/submitForm', async (req, res) => {
  try {
    // Handle form data and database interaction here
    // For example:
    const formData = req.body;
    const admission = new Admission(formData);
    await admission.save();

    // Respond with success
    res.json({ success: true });
  } catch (error) {
    console.error('Error handling form submission:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// All other requests go to the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
