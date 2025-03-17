require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // Fix: Handle form-urlencoded data
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Change if necessary
    password: "P34167okw@", // Change if necessary
    database: "customers"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

// Handle form submission
app.post("/submit", (req, res) => {
    const { first_name, last_name, company, industry, email, phone, message, consent } = req.body;

    if (!first_name || !last_name || !company || !email) {
        return res.status(400).json({ message: "First Name, Last Name, Company, and Email are required!" });
    }

    const sql = `
        INSERT INTO clients (first_name, last_name, company, industry, email, phone, message, consent) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [first_name, last_name, company, industry, email, phone, message, consent ? 1 : 0], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ message: "Database error. Please try again." });
        }
        res.json({ message: "Inquiry submitted successfully!" });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
