CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100),
    marks INT
);
INSERT INTO students (student_name, marks) VALUES
('Arun', 75),
('Priya', 92),
('Kavi', 88),
('Ravi', 60),
('Meena', 95),
('John', 82);
create view vw_student as
select student_name,marks from students where marks>80;
select * from vw_student;