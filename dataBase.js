// import pg from 'pg';


// 'use strict';
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('Users', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       firstName: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       lastName: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       email: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false,
//         validate:{
//           isEmail : true
//         }
//       },
//       password: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       DoB: {
//         type: Sequelize.DATE,
//         allowNull: false
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('Users');
//   }
// };


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
