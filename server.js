const express = require("express")
const server = express()
const hostname = "localhost"
const port = 3000

server.get("/", (req, res) => {
  res.send("hej hallå!")
})

server.post("/", () => {
  res.send("POST - hallooooh")
})

server.listen(port, hostname, () => {
  console.log(`Server is running perfectly at: http://${hostname}:${port}`)
})
