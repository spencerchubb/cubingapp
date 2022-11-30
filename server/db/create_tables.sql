CREATE TABLE "solves" (
  "id" serial PRIMARY KEY NOT NULL,
  "uid" integer NOT NULL,
  "timestamp" timestamp NOT NULL DEFAULT NOW(),
  "time" numeric,
  "initial_cube_state" json,
  "moves" json
);

CREATE TABLE "training_algs" (
  "id" serial PRIMARY KEY NOT NULL,
  "uid" integer NOT NULL,
  "set" varchar(255) NOT NULL,
  "training_algs" json,
  unique ("uid", "set")
);

CREATE TABLE "users" (
  "uid" serial PRIMARY KEY NOT NULL,
  "email" varchar(255) NOT NULL
);