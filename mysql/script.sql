CREATE DATABASE employees_db;
USE employees_db;
CREATE TABLE IF NOT EXISTS EMPLOYEES ( emp_id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, emp_name varchar(255) NOT NULL, emp_contact varchar(10), emp_add varchar(255) DEFAULT false ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO EMPLOYEES (emp_id, emp_name, emp_contact, emp_add) VALUES (1, 'kashish', 1234567890, 'abc street');
