CREATE TABLE users_fullname (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100)
);
INSERT INTO users_fullname (full_name) VALUES
('Kavi Balan'),
('John Michael Doe'),
('Sara Priya'),
('Ravi Kumar'),
('Elon Musk');

select full_name,
substring_index(full_name,' ',1)as first_name,
substring_index(full_name,' ',-1)as last_name,
concat(
	upper(left(substring_index(full_name,' ',1),1)),
    upper(left(substring_index(full_name,' ',-1),1))
    )as initialize 
    from users_fullname;





