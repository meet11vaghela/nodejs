const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const PORT = 8081;

// MongoDB URI (Database will be auto-created: "mydatabase")
const MONGO_URI = 'mongodb+srv://meetvaghela:KofqjQivma8vZ3Px@cluster0.t3pfrov.mongodb.net/mydatabase';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(' MongoDB connected'))
  .catch(err => console.error(' MongoDB connection error:', err));

// Create Schema (table structure)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: Number
}, { timestamps: true });

// Create Model (collection)
const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
  res.send('working...');
});

app.get('/api', (req, res) => {
  res.json({ message: 'API is working' });
});

/* -------------------- CRUD -------------------- */

// Create User
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read All Users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Read Single User
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID format' });
  }
});

// Update User
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete User
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
