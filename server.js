const express = require("express")
const app = express()
const port = 3000

const books = [{
    id: 1,
    title: "The greatest",
    author: "Isabel Blomström",
    released: 2010
  },
  {
    id: 2,
    title: "Worst case",
    author: "Neil Strauss",
    released: 2005
  },
  {
    id: 3,
    title: "The 'book'",
    author: "Anonymous",
    released: 0
  }
]

app.use(express.json())

app.get("/", (req, res) => {
  res.json("startsida") 
})

app.get("/books", (req, res) => {
  res.json(books)
})

app.get("/books/:id", (req, res) => {
  const book = books.find(book => book.id == req.params.id)
  if(!book) {
   return res.status(404).send("Boken finns inte")}
  res.send(book)
 })

//Lägger till
app.post("/books", (req, res) => {
  books.push(req.body)
  res.status(201).send()
})

//Ändrar
app.put("/books/:id", (req, res) => {
 const book = books.find(b => b.id == req.params.id)
 if(!book) {
   return res.status(404).send("Boken finns inte")}

 book.title = req.body.title
 book.author = req.body.author
 res.send(book)
})

app.delete("/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id)
 if(!book) {
  return res.status(404).send("Boken finns inte")}

 const index = books.indexOf(book)
 books.splice(index, 1)
 res.send(book)
})

app.listen(port, () => {
  console.log(`Server is running perfectly at: http://localhost:${port}/books`)
})