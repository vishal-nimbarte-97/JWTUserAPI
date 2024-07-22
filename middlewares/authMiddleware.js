const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    const token = bearerHeader.split(' ')[1];
    jwt.verify(token, "JWT_SECRET", (err, authData) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = authData;
      next();
    });
  } else {
    res.sendStatus(403);
  }
}

module.exports = verifyToken;
