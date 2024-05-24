const mysql = require("mysql2");


// Create a connection to the database
const connection = mysql.createConnection({
  host: "mysql-service",
  user: "root",
  password: "kash",
  port: "3306",
  database: "employees_db"
});
connection.connect(error => {
  if (error) {
    console.error("Error connecting to MySQL:", error);
    process.exit(1); // Exit the application if unable to connect
  }
  console.log("Successfully connected to the MySQL database.");
});

module.exports = connection;
// open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the MYSQL database.");
// });

// module.exports = connection;
