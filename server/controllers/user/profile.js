const jwt = require('jsonwebtoken');
require('dotenv').config();
const { profileQuery } = require('../../database/queries');
const { SECRET } = process.env;

const profile = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: 'unauthenticated' });
    } else {
      const {
        id,
        name,
        email,
        img, 
      } = decoded;
      profileQuery(id).then((data) => {
        const userData = { tasks: data.rows, id, name, email, img};
        res.json(userData);
      }).catch((err) => next(err));
    }
  })
};

module.exports = { profile };
