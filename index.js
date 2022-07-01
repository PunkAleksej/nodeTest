const express = require("express")
const path = require("path")
const authRouter = require('./router')

const PORT = 4000;

const app = express()

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', authRouter);

app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
});


//npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string,DoB:date
//npx sequelize-cli db:migrate
//killall -9 node
//npm run serve









