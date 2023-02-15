DROP DATABASE IF EXISTS announcements_dev;
CREATE DATABASE announcements_dev;

\c announcements_dev;

DROP TABLE IF EXISTS announcements;

CREATE TABLE announcements (
 id SERIAL PRIMARY KEY,
 church_name TEXT,
 title TEXT NOT NULL,
 description VARCHAR(900),
 type TEXT,
 location VARCHAR(100),
 date VARCHAR(20) NOT NULL,
 time VARCHAR(20) NOT NULL,
 contributor TEXT NOT NULL,
 is_member BOOLEAN,
 is_public BOOLEAN
 );
 

DROP TABLE IF EXISTS charities;

CREATE TABLE charities(
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 description VARCHAR(900),
 donations VARCHAR(20),
 month VARCHAR(100),
 year VARCHAR(20) NOT NULL
 );