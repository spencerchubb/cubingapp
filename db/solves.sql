DROP TABLE "solves";

CREATE TABLE "solves" (
  "id" serial PRIMARY KEY NOT NULL,
  "uid" integer NOT NULL,
  "timestamp" timestamp NOT NULL DEFAULT NOW(),
  "time" numeric,
  "initial_cube_state" json,
  "moves" json
);