DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(7,2) NOT NULL,
    stock_quantity INTEGER(5),
    
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("swashbuckled", "boardgames", 32.95, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mysterium", "boardgames", 32.95, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("museum caper", "boardgames", 32.95, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rocking chair", "chairs", 449.95, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("writing arm", "chairs", 1350.95, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("wakefield side", "chairs", 1250.95, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jacket", "clothing", 100.00, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("leggings", "clothing", 30.00, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("we'll find the place", "books", 32.95, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("c.s. lewis", "books", 32.95, 200);
