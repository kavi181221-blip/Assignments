CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(10,2)
);
INSERT INTO products (product_name, price) VALUES
('Pen', 10.00),
('Book', 120.50),
('Bag', 550.00);

DELIMITER $$

CREATE PROCEDURE sp_calculate_bill(
    IN p_product_id INT,
    IN p_quantity INT,
    OUT p_total DECIMAL(10,2)
)
BEGIN
    DECLARE v_price DECIMAL(10,2);

    -- Get price from table
    SELECT price INTO v_price
    FROM products
    WHERE product_id = p_product_id;

    -- Calculate bill
    
    SET @bill = 0;

CALL sp_calculate_bill(2, 3, @bill);

SELECT @bill AS total_bill;

    SET p_total = v_price * p_quantity;
END $$

DELIMITER ;

