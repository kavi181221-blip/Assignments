create database department;
use department;
create table employee1(emp1_id Int primary key auto_increment, 
emp1_name varchar(40),emp1_description varchar(50));
insert into employee1(emp1_name,emp1_description)
values("kavi","Im in class");
select *from employee1 where emp1_id=1;
create table department(
dep_id Int primary key auto_increment,
dep_name varchar(20),
dep_description varchar(50));
select * from department;
insert into department (dep_name,dep_description) values ("IT","Information Technology")
insert into department (dep_name,dep_description) values ("AI","Artificial Intelligence ")
insert into department (dep_name,dep_description) values ("DS","Data science")
insert into department (dep_name,dep_description) values ("MCA","Master of computer Application")
-- Write a query to show only students from the users table
create table user(
student_id Int primary key auto_increment,
student_name varchar(30),
student_age int);
select * from user;
insert into user(student_name,student_age) values ("kaviBalan",20)
insert into user(student_name,student_age) values ("Dharshi",21)
insert into user(student_name,student_age) values ("Aarthi",22)
insert into user(student_name,student_age) values ("Harini",21)
select student_name from user;
-- Add a new column phone to users.
alter table user add phone int(10);
update user  set phone=99423737 where student_id=1; 
update user  set phone=99423721 where student_id=2; 
update user  set phone=99423734 where student_id=3; 
update user  set phone=99373754 where student_id=4;