CREATE TABLE "alg_sets" (
    "id" serial PRIMARY KEY NOT NULL,
    "uid" integer NOT NULL,
    "set" varchar NOT NULL,
    "training_algs" json NOT NULL,
    "puzzle" varchar NOT NULL,
    "inactive_stickers" integer[] NOT NULL,
    "disregard" integer[] NOT NULL,
    "only_orientation" integer[] NOT NULL,
    "deleted" timestamp
);

CREATE TABLE "sessions" (
    "id" serial PRIMARY KEY NOT NULL,
    "uid" integer NOT NULL,
    "name" varchar NOT NULL,
    "updated" timestamp NOT NULL,
    "deleted" timestamp
);

CREATE TABLE "solves" (
    "id" serial PRIMARY KEY NOT NULL,
    "uid" integer NOT NULL,
    "timestamp" timestamp NOT NULL DEFAULT NOW(),
    "time" numeric NOT NULL,
    "scramble" varchar NOT NULL,
    "moves" varchar NOT NULL,
    "puzzle" varchar NOT NULL
);

CREATE TABLE "users" (
    "uid" serial PRIMARY KEY NOT NULL,
    "email" varchar NOT NULL,
    "created" timestamp NOT NULL DEFAULT NOW()
);