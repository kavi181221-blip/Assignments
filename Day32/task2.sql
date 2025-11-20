create database product;
use product;
create table product(id int auto_increment primary key,
name varchar(50),price decimal(10,2),
created_at date);
INSERT INTO product(name, price, created_at)
VALUES
('Mobile Phone', 1200.00, '2024-01-10'),
('Laptop', 55000.00, '2024-02-15'),
('Headphones', 750.00, '2024-03-01'),
('Bluetooth Speaker', 1500.00, '2024-04-05'),
('Smart Watch', 2500.00, '2024-05-20');
select * from product where price>1500;
update product set name="Apple_pc" where id=2;
select * from product;
select * from product order by price desc limit 3;