const express = require("express")
const path = require("path")
const { registration, loginCheck } = require("./middlewares.js")
const db = require('./models')

// import pg from 'pg';
// import { addNewUser } from "./dataBase.js" 

const PORT = 4000;

const app = express()

// const __dirname = path.resolve()

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (request, response) => {
    // response.sendFile(path.resolve(__dirname, "static", "first.html"))
    response.sendFile(`${__dirname}/static/first.html`)
})

app.post("/",  (request, response) => {
    if (!request.body) return response.sendStatus(400);
    loginCheck(request.body)

});


app.post("/registration", async (request, response) => {
    const {firstName, lastName, email, password, DoB} = request.body
    try {
        const user = await db.User.create({
            firstName,
            lastName,
            email,
            password,
            DoB
        })
        response.status(200).json({
            user
        })
    } catch(err) {
        response.status(400).json({message: err.message})
    }
});    


app.delete("/registration", async (request, response) => {
    const {firstName, lastName, email, password} = request.body
    try {
        const user = await db.User.destroy({
            where: {
              firstName
            }
        })
        response.status(200).json({
            user
        })
    } catch(err) {
        response.status(400).json({message: err.message})
    }
});


app.get("/registration", async (request, response) => {
    const {firstName, lastName, email, password} = request.body
    try {
        const user = await db.User.findOne({
            where: {
              firstName
            }
        })
        response.status(200).json({
            user
        })
    } catch(err) {
        response.status(400).json({message: err.message})
    }
});

app.put("/registration", async (request, response) => {
    const {firstName, lastName, email, password} = request.body
    try {
        const user = await db.User.update({
            password: 1
        }, {
            where: {
              firstName
            }
        })
        response.status(200).json({
            user
        })
    } catch(err) {
        response.status(400).json({message: err.message})
    }
});


    // try {

    //     const status = registration(request.body)
    //     if (typeof status !== 'string') {
    //         console.log(status)
    //         //addNewUser(status)
    //     }

    //     response.json({
    //         status,
    //     })



    // } catch (error) {
    //     console.error(error)
    //     res.sendStatus(500);
    // }


// app.post('/test/:id', (req, res) => {
//     try {
//         const { email } = req.body;
//         const { page } = req.query;
//         const { id } = req.params;
//         console.log('email:', email);
//         console.log('page:', page);
//         console.log('id:', id);

//         res.json({
//             email,
//             page,
//             id,
//         })
//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     }
// });




// const Client = pg.Client

// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'testdb',
//     password: 'fusion',
//     port: 5432,
// });



// function addNewUser(user) {
//     console.log(user)

//     const { regName, regSurname, regMail,
//         regPassword, regRepPassword } = user;
//     const query = ` 
//     INSERT INTO users (firstName, lastName, email, password) 
//     VALUES ('${regName}', '${regSurname}', '${regMail}', '${regPassword}') 
//     `;
//     client.query(query, (err, res) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log('Table is successfully created');
//         // client.end();
//     });
//     console.log(query)
// }




// client.connect();



//npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string,DoB:date
//npx sequelize-cli db:migrate
//killall -9 node
//npm run serve
// app.get('/', function(req, res) {
//     res.sendFile(path.resolve(__dirname, "static", "first.html"))
// })


app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
});
