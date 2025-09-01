const express = require('express');
const { Pool } = require('pg');

// Initialize Express app
const app = express();
const PORT = 3000;

// PostgreSQL connection setup
// The client will use the DATABASE_URL environment variable
// we will set in our docker-compose file.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create the API endpoint
app.get('/api/status', async (req, res) => {
  try {
    // Try to get a client from the connection pool
    const client = await pool.connect();
    // If successful, send a success message
    res.json({ status: 'success', message: 'Successfully connected to the database!' });
    // Release the client back to the pool
    client.release();
  } catch (err) {
    // If it fails, send an error message
    res.status(500).json({ status: 'error', message: 'Failed to connect to the database.', error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});