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

// Base route
router.get('/', getUsers);
router.post('/', createUser);

// Search route
router.get('/search', searchUsers);

// Routes with ID parameter
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router; 