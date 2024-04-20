-- Categories table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Services table
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    name VARCHAR(255) NOT NULL,
    type ENUM('Normal', 'VIP') NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Service price options table
CREATE TABLE service_price_options (
    id INT AUTO_INCREMENT PRIMARY KEY,
    service_id INT,
    duration INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    type ENUM('Hourly', 'Weekly', 'Monthly') NOT NULL,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE
);
