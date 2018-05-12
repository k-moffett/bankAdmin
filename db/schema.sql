DROP DATABASE IF EXISTS bankAdmin_db;

CREATE DATABASE bankAdmin_db;

USE bankAdmin_db;

DROP TABLE IF EXISTS user;
CREATE TABLE user (id int AUTO_INCREMENT, name varchar(100), address varchar, PRIMARY KEY (id));

DROP TABLE IF EXISTS account;
CREATE TABLE account ( name varchar(100), type varchar(100));

DROP TABLE IF EXISTS transaction;
CREATE TABLE account ( description varchar(500));