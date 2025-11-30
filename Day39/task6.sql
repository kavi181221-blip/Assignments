CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100),
    product_name VARCHAR(100),
    quantity INT,
    order_date DATE
);
INSERT INTO orders (customer_name, product_name, quantity, order_date) VALUES
('Kavi', 'Laptop', 1, '2025-01-10'),
('Arun', 'Mobile', 2, '2025-01-11');

DELIMITER $$

CREATE PROCEDURE sp_insert_order(
    IN cname VARCHAR(100),
    IN pname VARCHAR(100),
    IN qty INT,
    IN odate DATE
)
BEGIN
    INSERT INTO orders (customer_name, product_name, quantity, order_date)
    VALUES (cname, pname, qty, odate);
END $$

DELIMITER ;
CALL sp_insert_order('Priya', 'Keyboard', 3, '2025-01-12');
select * from orders


