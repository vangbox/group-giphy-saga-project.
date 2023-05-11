CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key
-- Columns of gif_table will likely be: (id, url, alt-text, category_id)

--Favorites Table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR(200) NOT NULL,
    "alt_text" VARCHAR(256) NOT NULL,
    "category_id" INT REFERENCES "category"
);

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
