const Joi = require('joi');

const signUpSchema = Joi.object({
  name: Joi
    .string()
    .alphanum()
    .min(3)
    .max(25)
    .required(),
  email: Joi
    .string()
    .min(12)
    .max(100)
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi
    .string()
    .min(7)
    .alphanum(),
  repeat_password: Joi
    .ref('password'),
});

module.exports = { signUpSchema };