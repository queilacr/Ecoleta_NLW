const express = require("express")
const server = express()

//pegando o banco de dados
const db = require("./database/db.js")

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express:server,
    noCache: true
})

//render: processar o html no servidor
//req: requisição
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create_point", (req, res) => {
    return res.render("create_point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})


server.listen(3000)
