var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "RootRoot",
    database: "students_records",
});

connection.connect((err) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Connected to database");
    //   var sql = "INSERT INTO students (id, name, course) VALUES (1, 'John Doe', 'Computer Science')";
      connection.query(sql, function (err, result) {
        if (err) {
          console.log(err);
        }
        // console.log("Value inserted");
      });
    }
});

var sql = "SELECT * FROM student";
connection.query(sql, function (err, result) {
  console.log(result);
});