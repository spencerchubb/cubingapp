CREATE TABLE "alg_sets" (
    "id" serial PRIMARY KEY NOT NULL,
    "uid" integer NOT NULL,
    "set" varchar NOT NULL,
    "training_algs" json NOT NULL,
    "deleted" timestamp,
    "updated" timestamp NOT NULL,
    "name" varchar NOT NULL DEFAULT "set",
);

CREATE TABLE "users" (
    "uid" serial PRIMARY KEY NOT NULL,
    "email" varchar NOT NULL,
    "created" timestamp NOT NULL DEFAULT NOW()
);