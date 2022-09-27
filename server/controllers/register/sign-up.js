const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { signUpQuery } = require('../../database/queries');
const { signUpSchema } = require('../../validation');

const signUp = (req, res, next) => {
  const { error, value } = signUpSchema.validate(req.body);
  if (error) {
    res.status(401).send({ message: error.details[0].message, state: 'fail' });
  } else {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
      .then((hashPassword) => signUpQuery([name, email, hashPassword]))
      .then((data) => {
        const { id, img } = data.rows[0];
        jwt.sign({ id, name, email, img }, process.env.SECRET, { expiresIn: '365d' }, (err, token) => {
          if (err) next(err);
          else {
            res.cookie('token', token, { httpOnly: true }).status(200)
              .send({ message: 'welcome', data: data.rows[0], state: 'success' });
          }
        });
      })
      .catch((err) => res.json({ message: 'email already in use', state: 'fail' }));
  }
};

module.exports = { signUp };
