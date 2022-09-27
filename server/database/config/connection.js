const { Pool } = require('pg');
require('dotenv').config();

let URL = '';

const {
    NODE_ENV,
    DB_URL,
    TEST_DB,
    DATABASE_URL,
} = process.env;

if (NODE_ENV === 'development') URL = DB_URL;
else if (NODE_ENV === 'test') URL = TEST_DB;
else if (NODE_ENV === 'production') URL = DATABASE_URL;
else throw Error('Database URL is not exist');

const connection = new Pool({
  connectionString: URL,
  ssl: NODE_ENV !== 'production' ? false : { rejectUnauthorized: false },
});

module.exports = { connection };