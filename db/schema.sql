-- * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.
--      * **date**: a TIMESTAMP.

DROP DATABASE IF EXISTS burgers_DB;

CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NULL,
  devoured TINYINT NULL,
  date TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO burgers (id, burger_name, devoured)
VALUES (1, "Black and Blue",0);

INSERT INTO burgers (id, burger_name, devoured)
VALUES (2, "Veggie", 0);

INSERT INTO burgers (id, burger_name, devoured)
VALUES (3, "Turkey Burger", 0 );