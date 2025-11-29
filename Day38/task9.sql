CREATE TABLE products1 (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    stock INT
);

INSERT INTO products1 (product_name, stock) VALUES
('Laptop', 10),
('Mouse', 50),
('Keyboard', 30),
('Monitor', 15);

DELIMITER $$

CREATE PROCEDURE sp_update_stock(
    IN p_product_id INT,
    IN p_new_stock INT
)
BEGIN
    UPDATE products1
    SET stock = p_new_stock
    WHERE product_id = p_product_id;
END $$

DELIMITER ;
CALL sp_update_stock(2, 80);
select * from products1


