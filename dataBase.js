
const { Client } = require('pg'); 
 
const client = new Client({ 
user: 'postgres', 
host: 'localhost', 
database: 'users', 
password: 'fusion', 
port: 5432, 
}); 

const query = ` 
CREATE TABLE users ( 
firstName varchar, 
lastName varchar,
email varchar,
password varchar 
); 
`; 

client.query(query, (err, res) => { 
  if (err) { 
  console.error(err); 
  return; 
  } 
  console.log('Table is successfully created'); 
  client.end(); 
  }); 

client.connect();