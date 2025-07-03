const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');  // Correct import of CORS middleware

const app = express();
const port = 5000;

connectToMongo(); // Connect to MongoDB

app.use(cors());  // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`);
});
