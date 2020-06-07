const express = require("express")
const server = express()

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express:server,
    noCache: true
})

//req: requisição
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create_point", (req, res) => {
    return res.render("create_point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})


server.listen(3000)
