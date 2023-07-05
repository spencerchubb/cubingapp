CREATE TABLE "alg_sets" (
    "id" serial PRIMARY KEY NOT NULL,
    "uid" integer NOT NULL,
    "set" varchar NOT NULL,
    "training_algs" json NOT NULL,
    "puzzle" varchar NOT NULL,
    "deleted" timestamp,
    "updated" timestamp NOT NULL,
    "name" varchar NOT NULL DEFAULT "set",
);

-- Temporary ----------------------------------

ALTER TABLE alg_sets
DROP COLUMN "inactive_stickers",
DROP COLUMN "disregard",
DROP COLUMN "only_orientation";

-- Step 1: Add the new column without default constraint
ALTER TABLE alg_sets
ADD COLUMN name varchar;

-- Step 2: Update the new column with the values from the "set" column
UPDATE alg_sets
SET name = "set";

-- Step 3: Alter the column to add the NOT NULL constraint
ALTER TABLE alg_sets
ALTER COLUMN name SET NOT NULL;

ALTER TABLE alg_sets
ALTER COLUMN name DROP DEFAULT;
-- End Temporary ------------------------------

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
    "puzzle" varchar NOT NULL,
    "session_id" integer NOT NULL,
    "penalty" varchar
);

CREATE TABLE "users" (
    "uid" serial PRIMARY KEY NOT NULL,
    "email" varchar NOT NULL,
    "created" timestamp NOT NULL DEFAULT NOW()
);