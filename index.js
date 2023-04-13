const bodyParser = require('body-parser')
const express = require('express')
const { default: mongoose } = require('mongoose')
const Book = require('./Book')
const app = express()
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/librarian').then(()=>{
    console.log('connected to database')
})

app.get("/books", async (req, res)=>{
    let list = await Book.find()
    res.send(list)
})

app.post("/books", async (req, res)=>{
    try{
        let book = Book(req.body)
        await book.save()
        res.send(book)
    } catch(error){
        res.status(400).send(error)
    }
})


app.listen(3000, function(){
    console.log("Server started at port 3000")
})