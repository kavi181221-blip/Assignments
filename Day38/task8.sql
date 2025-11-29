CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);
INSERT INTO products (product_name, price) VALUES
('Laptop', 55000),
('Mouse', 500),
('Keyboard', 1200),
('Monitor', 8000);

DELIMITER $$

CREATE FUNCTION fn_calculate_tax(price DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN price * 0.18;   -- 18% tax
END $$

DELIMITER ;

SELECT 
    product_name,
    price,
    fn_calculate_tax(price) AS tax_amount
FROM products;



