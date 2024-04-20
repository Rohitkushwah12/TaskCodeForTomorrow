const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/constants');

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Invalid or expired token' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid or expired token' });
    req.user = decoded.user;
    next();
  });
};
