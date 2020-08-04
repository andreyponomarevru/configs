-- Docker database initialization

CREATE USER ikar 
  WITH PASSWORD '1234';

CREATE DATABASE ikar;

 GRANT ALL PRIVILEGES 
    ON DATABASE ikar 
    TO ikar;

CREATE TABLE IF NOT EXISTS stuff (
  PRIMARY KEY (stuff_id),
  stuff_id    INTEGER        NOT NULL    GENERATED ALWAYS AS IDENTITY,
  title       VARCHAR(255)   NOT NULL,
  body        TEXT
);
