const jwt = require('jsonwebtoken');
const { deleteTaskQuery } = require('../../database/queries');
require('dotenv').config();

const deleteTask = (req, res, next) => {

    const { id } = req.params;
    deleteTaskQuery(id)
      .then(res.send({ message: 'deleted successfully' }))
      .catch((err) => next(err));
};

module.exports = { deleteTask };

