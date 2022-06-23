import express from "express"
import path from "path"
import { registration, loginCheck } from "./middlewares.js"

const PORT = 4000;

const app = express()

const __dirname = path.resolve()

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', function (request, response) {
    // response.sendFile(path.resolve(__dirname, "static", "first.html"))
    response.sendFile(`${__dirname}/static/first.html`)
})

app.post("/", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    loginCheck(request.body)

});

app.post("/registration", function (request, response) {
    try {

        const status = registration(request.body)
        response.json({
            status,
        })
    } catch (error) {
        console.error(error)
        res.sendStatus(500);
    }
});

app.post('/test/:id', (req, res) => {
    try {
        const { email } = req.body;
        const { page } = req.query;
        const { id } = req.params;
        console.log('email:', email);
        console.log('page:', page);
        console.log('id:', id);

        res.json({
            email,
            page,
            id,
        })
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

//npm run serve
// app.get('/', function(req, res) {
//     res.sendFile(path.resolve(__dirname, "static", "first.html"))
// })


app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
});
