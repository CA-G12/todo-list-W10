const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { signInQuery } = require('../../database/queries');
const { signInSchema } = require('../../validation');

require('dotenv').config();

const signIn = (req, res, next) => {
    const { email, password } = req.body;
    const { error, value } = signInSchema.validate(req.body);

    if (error) {
        res.status(401).send({ message: error.details[0].message, state: 'fail' });
    } else {
        signInQuery(email)
            .then((data) => {
                if (data.rows.length === 0) throw new Error('invalid email or password');
                else {
                    const {
                        hashedpassword,
                        id,
                        name,
                        img,
                    } = data.rows[0];

                    bcrypt.compare(password, hashedpassword, (err, result) => {
                        if (err) next(err);
                        if (!result) res.json({ message: 'invalid email or password', state: 'fail' });
                        else {
                            const token = jwt.sign({
                                id,
                                name,
                                email,
                                img,
                            }, process.env.SECRET);
                            res.cookie('token', token, { httpOnly: true }).json({ message: 'successful' });
                        }
                    });
                }
            })
            .catch((err) => res.json({ message: `${err}`, state: 'fail' }));
    }
};

module.exports = { signIn };