const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling if user data is invalid
  // ... further processing ...
});

// Another example with a subtle issue: incorrect path handling
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // If :id is not a number it can cause issues in the database query
  // ... database query ...
});