const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing or invalid user data' });
  }
  // ... further processing ...
  res.status(201).json({ message: 'User created successfully' });
}).catch(err => {
  console.error("Error creating user:", err);
  res.status(500).json({ error: 'Failed to create user' });
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... database query with error handling ...
  // Example using a promise
  db.getUser(userId)
    .then(user => {
      if (!user) return res.status(404).json({error: "User not found"});
      res.json(user);
    })
    .catch(err => {
      console.error("Error fetching user:", err);
      res.status(500).json({ error: 'Failed to fetch user' });
    });
});