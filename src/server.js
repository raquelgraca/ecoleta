const express = require("express")
const server = express()


//configurar pasta pública
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//configurar caminhos da aplicação(routes)
server.get("/", (req, res) => {
  return res.render("index.html")
})

server.get("/search", (req, res) => {
  return res.render("search-results.html")
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

// ligar o servidor
server.listen(3000)
