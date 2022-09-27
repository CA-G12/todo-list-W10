const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const authentication = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).send({ message: 'unauthenticated' });
  } else {
    jwt.verify(token, SECRET, (error, encode) => {
      if (error) {
        res.status(401).send({ message: 'unauthenticated' });
      } else {
        next();
      }
    });
  }
};

module.exports = { authentication };
