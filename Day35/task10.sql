CREATE TABLE employees5 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone VARCHAR(50)
);

INSERT INTO employees5(first_name, last_name, phone) VALUES
('Arun', 'Kumar', '987-654.3210'),
('Bala', 'Ravi', '(91) 98877-76655'),
('Kavi', 'Balan', '  90922  33445  '),
('Sara', 'Devi', '12345-22'),
('Mani', 'K', '91.99444.22119'),
('Raju', 'M', 'abcd-12345'),
('Deepa', 'S', '9988776655'),
('Vikram', 'N', '+91 8877 665544');

CREATE OR REPLACE VIEW vw_valid_phones AS
SELECT 
    id,
    first_name,
    last_name,
    phone,

    -- Remove all non-digit characters
    REGEXP_REPLACE(phone, '[^0-9]', '') AS digits_only,

    CASE 
        WHEN LENGTH(REGEXP_REPLACE(phone, '[^0-9]', '')) = 10 
            THEN CONCAT('+91', REGEXP_REPLACE(phone, '[^0-9]', ''))

        WHEN LENGTH(REGEXP_REPLACE(phone, '[^0-9]', '')) = 12 
             AND LEFT(REGEXP_REPLACE(phone, '[^0-9]', ''), 2) = '91'
            THEN CONCAT('+', REGEXP_REPLACE(phone, '[^0-9]', ''))

        ELSE 'INVALID PHONE'
    END AS e164_phone

FROM employees5;


