// import pg from 'pg';






// export function addNewUser(user) {
//   const Client = pg.Client
//   const client = new Client({
//       user: 'postgres',
//       host: 'localhost',
//       database: 'testdb',
//       password: 'fusion',
//       port: 5432,
//   });

//   client.connect();
//   const { regName, regSurname, regMail,
//       regPassword, regRepPassword } = user;
//   const query = ` 
//   INSERT INTO users (firstName, lastName, email, password) 
//   VALUES ('${regName}', '${regSurname}', '${regMail}', '${regPassword}') 
//   `;
//   client.query(query, (err, res) => {
//       if (err) {
//           console.error(err);
//           return;
//       }
//       client.end();  
//       console.log('Table is successfully created');
//   });
//   console.log(query)
// }











// const query = ` 
//     CREATE TABLE users (
//     customer_id int, 
//     firstName varchar, 
//     lastName varchar,
//     email varchar,
//     password varchar 
//     ); 
// `; 
