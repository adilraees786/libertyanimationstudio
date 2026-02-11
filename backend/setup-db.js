const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'liberaty-animation-studio'
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    social VARCHAR(255),
    brand_description TEXT,
    package_type VARCHAR(100),
    challenge TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

console.log(`Connecting to database: ${process.env.DB_NAME}...`);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1);
    }
    console.log('Connected to MySQL.');

    connection.query(createTableQuery, (err, results) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table "contact_messages" checked/created successfully.');
        }
        connection.end();
    });
});
