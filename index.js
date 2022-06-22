import express from "express"
import path from "path"
import { requestTime, logger } from "./middlewares.js"

const PORT = 3000;

const app = express()

const __dirname = path.resolve()

app.use(express.static(path.resolve(__dirname, 'static')))


app.use(requestTime)
app.use(logger)

app.get('/time', function(req, res) {
    console.log(logger)
    console.log()
})


// app.get('/', function(req, res) {
//     // res.send(`<h1>Hello Express</h1>`)
//     res.sendFile(path.resolve(__dirname, "static", "first.html"))
// })


// app.get('/second.html', function(req, res) {
//     console.log(res.requestTime)
//     res.sendFile(path.resolve(__dirname, "static", "second.html"))
// })

// app.get('/third', function(req, res) {
//     res.sendFile(path.resolve(__dirname, "static", "third.html"))
// })


app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`)
});
