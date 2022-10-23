DROP TABLE "training_algs";

CREATE TABLE "training_algs" (
  "id" serial PRIMARY KEY NOT NULL,
  "uid" integer NOT NULL,
  "set" varchar(255) NOT NULL,
  "training_algs" json,
  unique ("uid", "set")
);