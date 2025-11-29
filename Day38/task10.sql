CREATE TABLE customers2 (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100)
);
CREATE TABLE products2 (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);
CREATE TABLE orders2 (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    qty INT,
    FOREIGN KEY (customer_id) REFERENCES customers2(customer_id),
    FOREIGN KEY (product_id) REFERENCES products2(product_id)
);
INSERT INTO customers2 (customer_name) VALUES
('Arun'),
('Priya'),
('Kavi'),
('Meena');
INSERT INTO products2 (product_name, price) VALUES
('Laptop', 55000),
('Mouse', 500),
('Keyboard', 1200),
('Monitor', 8000);
INSERT INTO orders2 (customer_id, product_id, qty) VALUES
(1, 1, 2),   -- Arun buys 2 Laptops
(2, 2, 5),   -- Priya buys 5 Mouse
(3, 4, 1),   -- Kavi buys 1 Monitor
(4, 3, 3);   -- Meena buys 3 Keyboards

CREATE VIEW vw_order_details AS
SELECT 
    o.order_id,
    c.customer_name,
    p.product_name,
    p.price,
    o.qty,
    (o.qty * p.price) AS total_amount
FROM orders2 o
JOIN customers2 c ON o.customer_id = c.customer_id
JOIN products2 p ON o.product_id = p.product_id;
select* from vw_order_details





