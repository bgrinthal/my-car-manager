DROP DATABASE IF EXISTS automotive_db;

CREATE DATABASE automotive_db;

USE automotive_db;

CREATE TABLE manufacturer (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE model (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    year INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    trim VARCHAR(30),
    price DECIMAL(10, 2) NOT NULL,
    start_mile, DECIMAL(10, 2) NOT NULL,
    manufacturer_id INT,
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(id) 
    ON DELETE CASCADE
);

CREATE TABLE specs (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    color VARCHAR(30) NOT NULL,
    trans VARCHAR(30) NOT NULL,
    sold DECIMAL(10, 2),
    end_mile INT,
    model_id INT NOT NULL,
    FOREIGN KEY (model_id) REFERENCES model(id)
    ON DELETE CASCADE
);