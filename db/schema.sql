DROP DATABASE IF EXISTS lucifer;
CREATE DATABASE lucifer;

USE lucifer;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    department_name VARCHAR(100)
);

CREATE TABLE roles (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT PRIMARY KEY NOT NULL, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
);