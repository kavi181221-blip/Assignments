CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50)
);

INSERT INTO users (username) VALUES
('kavi'),
('arun'),
('sara');

CREATE TABLE login_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    login_time DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
DELIMITER $$

CREATE PROCEDURE sp_log_login(
    IN p_user_id INT
)
BEGIN
    INSERT INTO login_log(user_id, login_time)
    VALUES (p_user_id, NOW());
END $$

DELIMITER ;
CALL sp_log_login(1);
SELECT * FROM login_log;


