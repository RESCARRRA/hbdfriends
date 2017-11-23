var mysql = require("mysql");
var connection;
// var JAWSDB_URL = "mysql://mfnatp82w3rcmun7:hdotw7r9chz8501k@xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ry213e1f5ag9xobt"


if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_DB"
});
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
