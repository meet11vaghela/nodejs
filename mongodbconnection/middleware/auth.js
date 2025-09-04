const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, error: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    const user = await User.findById(decoded.id);
    if (!user || !user.isActive) {
      return res.status(401).json({ success: false, error: 'Not authorized' });
    }
    return next();
  } catch (err) {
    return res.status(401).json({ success: false, error: 'Not authorized, token failed' });
  }
});

module.exports = { protect };

