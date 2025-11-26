CREATE TABLE countdown_events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(100),
    event_date DATE
);

INSERT INTO countdown_events (event_name, event_date) VALUES
('New Year', '2026-01-01'),
('My Birthday', '2025-12-12'),
('Project Deadline', '2025-11-30');

SELECT 
    event_name,
    event_date,
    DATEDIFF(event_date, CURDATE()) AS days_left
FROM countdown_events;
SELECT 
    event_name,
    event_date,
    DATEDIFF(event_date, CURDATE()) AS days_left
FROM countdown_events
WHERE event_date >= CURDATE();
SELECT 
    event_name,
    event_date,
    DATEDIFF(event_date, CURDATE()) AS days_left
FROM countdown_events
WHERE event_date >= CURDATE()
ORDER BY event_date
LIMIT 1;



