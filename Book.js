const { Schema, model } = require("mongoose");

const bookSchema = Schema({
    name:{
        type: String,
        required: true
    },
    description: String
})

module.exports = model('Book', bookSchema)