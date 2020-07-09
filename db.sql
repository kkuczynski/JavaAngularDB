CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "surname" varchar,
  "created_at" date,
  "given_role" varchar,
  "login" varchar,
  "password" varchar
);

CREATE TABLE "pets" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "spieces" varchar,
  "race" varchar,
  "age" int,
  "added_at" date,
  "health" varchar,
  "sex" varchar,
  "sterilized" bool,
  "adopted" bool,  
  "adopt_date" date,
  "temporary_adopted" bool,
  "tmp_adopt_for_days" int
);

CREATE TABLE "adoption_houses" (
  "id" SERIAL PRIMARY KEY,
  "address" varchar,
  "city" varchar,
  "postcode" varchar,
  "user_id" int,
  "pets_id" int,
  "conditions" varchar
);

ALTER TABLE "adoption_houses" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "adoption_houses" ADD FOREIGN KEY ("pets_id") REFERENCES "pets" ("id");
