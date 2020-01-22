const express = require('express');
const jwt = require('jsonwebtoken');
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodsRoutes');

const router = express.Router();

const verifyLoggedAreaToken = () => (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader.split(' ')[1];

  try {
    const tokenInfo = jwt.verify(token, process.env.token);

    req.user = {
      username: tokenInfo.username,
      id: tokenInfo.id,
    };

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token expirado', status: 401 });
  }
};

// Public Routes
router.use('/users', userRoutes);

// Middleware
router.use(verifyLoggedAreaToken());

// Protected Routes
router.use('/foods', foodRoutes);

module.exports = router;
