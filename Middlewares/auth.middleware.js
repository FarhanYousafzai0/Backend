import jwt from 'jsonwebtoken';
import User from '../Models/user.model.js';

const authorize = async (req, res, next) => {
  try {
    let token;

    // Check if Authorization header exists and starts with "Bearer"
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    // If token is missing
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // Verify token and decode payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user in DB using the decoded userId
    const user = await User.findById(decoded.userId).select('-password'); 

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: User not found' });
    }

    // Attach user to request so other routes can access it
    req.user = user;

    next(); // 

  } catch (error) {
    res.status(401).json({
      message: 'Unauthorized: Invalid or expired token',
      success: false,
    });
  }
};

export default authorize;
