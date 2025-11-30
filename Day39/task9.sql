CREATE TABLE sales (
    sale_id INT AUTO_INCREMENT PRIMARY KEY,
    sale_date DATE,
    amount DECIMAL(10,2)
);
INSERT INTO sales (sale_date, amount) VALUES
('2025-01-05', 500.00),
('2025-01-12', 1200.50),
('2025-02-03', 750.00),
('2025-02-18', 300.00),
('2025-03-10', 1500.00);
DELIMITER $$

CREATE PROCEDURE sp_total_sales_by_month(
    IN p_year INT,
    IN p_month INT,
    OUT p_total DECIMAL(10,2)
)
BEGIN
    SELECT SUM(amount)
    INTO p_total
    FROM sales
    WHERE YEAR(sale_date) = p_year
      AND MONTH(sale_date) = p_month;
END $$

DELIMITER ;


SET @tot = 0;

CALL sp_total_sales_by_month(2025, 1, @tot);

SELECT @tot AS total_sales;
