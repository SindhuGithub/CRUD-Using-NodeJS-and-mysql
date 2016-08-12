var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


//Retrieve data from database.
con.query('SELECT * FROM cars',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

//Create data into database.
var car = { color: 'Pink', Year: '2009' };
con.query('INSERT INTO cars SET ?', car, function(err,res){
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});


//Update data into database.
con.query(
  'UPDATE cars SET color = ? Where ID = ?',
  ["blue", 1],
  function (err, result) {
    if (err) throw err;

    console.log('Changed ' + result.changedRows + ' rows');
  }
);

//Delete data into database.
con.query(
  'DELETE FROM cars WHERE id = ?',
  [3],
  function (err, result) {
    if (err) throw err;

    console.log('Deleted ' + result.affectedRows + ' rows');
  }
);

con.end(function(err) {
  
});