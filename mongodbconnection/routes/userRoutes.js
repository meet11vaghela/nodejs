const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  searchUsers
} = require('../controllers/userController');

const router = express.Router();
const { protect } = require('../middleware/auth');

// Base route
router.get('/', protect, getUsers);
router.post('/', protect, createUser);

// Search route
router.get('/search', protect, searchUsers);

// Routes with ID parameter
router.get('/:id', protect, getUser);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

module.exports = router; 