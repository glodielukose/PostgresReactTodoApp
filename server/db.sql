CREATE TABLE todos (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255),
  title VARCHAR(255),
  completed BOOLEAN DEFAULT false,
  date DATE DEFAULT CURRENT_DATE
);

INSERT INTO todos(id, email, title, progress, completed) VALUES (1, 'glodielukose@gmail.com', 'my first todo', 10, false);

CREATE TABLE users(
  email VARCHAR(255) UNIQUE NOT NULL,
  hashed_password VARCHAR(255)
);

INSERT INTO users(email, hashed_password) VALUES ('glodielukose@gmail.com', '123456');