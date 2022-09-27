BEGIN;
DROP TABLE IF EXISTS users, tasks;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    img VARCHAR(500) DEFAULT 'https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg'
);

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    content VARCHAR(500),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

COMMIT;