CREATE TABLE texts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    raw_text VARCHAR(200)
);
INSERT INTO texts (raw_text)
VALUES
('   hello world   '),
('   MYSQL is GOOD  '),
('   i am KAVI  ');
SELECT
    raw_text,

    CONCAT(
        UPPER(LEFT(TRIM(raw_text), 1)),
        LOWER(SUBSTRING(TRIM(raw_text), 2))
    ) AS formatted_text

FROM texts;




