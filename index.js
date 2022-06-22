import express from "express"
import path from "path"
import { registration, loginCheck } from "./middlewares.js"

const PORT = 3000;

const app = express()

const __dirname = path.resolve()

app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response) {
    response.sendFile(path.resolve(__dirname, "static", "first.html"))
})





const urlencodedParser = express.urlencoded({extended: false});
app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    loginCheck(request.body)
    //console.log(request.body);
    //response.send(`${request.body.userName} - ${request.body.userAge}`);
});
   
app.post("/registration.html", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    loginCheck(request.body)

});

// app.get('/', function(req, res) {
//     res.sendFile(path.resolve(__dirname, "static", "first.html"))
// })



app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
});
