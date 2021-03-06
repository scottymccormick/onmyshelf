import mysql from 'mysql';

const sqlConnection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'onmyshelfdev'
});

sqlConnection.connect((err) => {
  if (err) {
    console.log('error connecting to mysql', err);
    return;
  }
  console.log('successful connection to mysql');
});

export default sqlConnection;