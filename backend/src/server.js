const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Routes
app.get('/test', (req, res) => {
    try {
        res.status(200).json({ message: 'Successfully getted data', data: 'Hello world!'});
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving customers', error: err.message });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});