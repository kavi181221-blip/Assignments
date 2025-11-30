CREATE TABLE products1 (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10,2)
);
INSERT INTO products1 (product_name, price) VALUES
('Pen', 10.00),
('Book', 120.00),
('Bag', 500.00);

DELIMITER $$

CREATE PROCEDURE sp_increase_price122(
    IN p_product_id INT,
    IN p_percentage DECIMAL(5,2)
)
BEGIN
    UPDATE products1
    SET price = price + (price * p_percentage / 100)
    WHERE product_id = p_product_id;
END $$

DELIMITER ;

CALL sp_increase_price122(2, 10);
SELECT * FROM products1;


