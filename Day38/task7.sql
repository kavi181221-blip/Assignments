CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(100),
    emp_salary DECIMAL(10,2),
    emp_department VARCHAR(50)
);

delimiter $$
create procedure sp_insert_employee(
in p_name varchar(100),
in p_salary decimal(10,2),
in p_department varchar(100))
begin
insert into employees(emp_name,emp_salary,emp_department)values(p_name,p_salary,p_department);
end $$
delimiter ;

call sp_insert_employee("kavi",1000.00,"IT")


