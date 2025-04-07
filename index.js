const express = require('express');
const app = express();
app.use(express.json());

// Dữ liệu mặc định
let users = [
  { id: 2, name: "HieuMino" },
  { id: 3, name: "Hieu" }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST new user
app.post('/users', (req, res) => {
  const newUser = {
    id: req.body.id,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});
//Put User
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.name = req.body.name;
  res.json(user);
});
// delete
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.status(204).send(); // 204 = No content
});
// Server
app.listen(3000, () => {
  console.log('API running on port 3000');
});
