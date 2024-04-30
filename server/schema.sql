-- Location: /var/www/data/cubingapp.db

-- Make sure you run 'chown www-data' on the folder and database file.
-- This ensures that php can write to the database.

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    username TEXT NOT NULL UNIQUE,
    hash TEXT NOT NULL,
    auth_token TEXT NOT NULL,
    auth_token_expires TIMESTAMP NOT NULL
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    video_filename TEXT NOT NULL
);

CREATE TABLE comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    comment TEXT NOT NULL
);