const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// MySQL database configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root@12345',
  database: 'school_system',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Endpoint for data summaries
app.get('/api/summary', (req, res) => {
  const query = `
    SELECT COUNT(*) as totalStudents,
           AVG(Age) as averageAge,
           COUNT(DISTINCT ClassID) as totalClasses
    FROM Students;
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const summary = {
      totalStudents: results[0].totalStudents,
      averageAge: results[0].averageAge,
      totalClasses: results[0].totalClasses,
    };

    res.json(summary);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
