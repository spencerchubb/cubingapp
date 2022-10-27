DROP TABLE "users";

CREATE TABLE "users" (
  "uid" serial PRIMARY KEY NOT NULL,
  "email" varchar(255) NOT NULL
);