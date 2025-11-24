SELECT 
    YEAR(hire_date) AS hire_year,
    MONTH(hire_date) AS hire_month,
    DATE_FORMAT(hire_date, '%Y-%m') AS year_month,
    COUNT(*) AS total_hires
FROM employees
WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 24 MONTH)
GROUP BY YEAR(hire_date), MONTH(hire_date)
ORDER BY YEAR(hire_date), MONTH(hire_date);
