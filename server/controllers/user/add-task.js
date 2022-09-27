const jwt = require('jsonwebtoken');
const { addTaskQuery } = require('../../database/queries');
const { SECRET } = process.env;

const addTask = (req, res, next) => {
  const { token } = req.cookies;
  const { title , content } = req.body;

  jwt.verify(token, SECRET, (err, decoded) =>{
    const { id } = decoded;
    addTaskQuery([title,content, id])
      .then((data) => res.send({ message: 'task added successfully'}))
      .catch((err) => next(err));
  })
};

module.exports = { addTask };
