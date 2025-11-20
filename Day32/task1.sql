create database employees;
use employees;
create table employees(id int auto_increment primary key,
first_name varchar(50),
last_name varchar(50),
age int,hire_date date,salary int);
insert into employees(first_name,last_name,age,hire_date,salary)
values("kavi","balan",20,"2022-09-01",50000);
insert into employees(first_name,last_name,age,hire_date,salary)
values("Rajesh","Kanna",29,"2020-08-31",70000);
insert into employees(first_name,last_name,age,hire_date,salary)
values("Aarthi","Vasugi",23,"2021-07-09",75000);
insert into employees(first_name,last_name,age,hire_date,salary)
values("keerthi","R",24,"2020-07-09",99000);
insert into employees(first_name,last_name,age,hire_date,salary)
values("Harini","Shree",21,"2023-01-06",90000);
insert into employees(first_name,last_name,age,hire_date,salary)
values("Dharishika","Dharshu",21,"2024-03-06",32000);
insert into employees(first_name,last_name,age,hire_date,salary)
values("Sangavi","song",23,"2021-02-01",56000);
insert into employees(first_name,last_name,age,hire_date,salary)
values("Hari","Prasath",22,"2021-03-04",1000000);

select first_name,hire_date from employees;
update employees set salary=salary+10000 where first_name="kavi";
select * from employees;
delete from employees where  id=6;
select * from employees order by salary desc;