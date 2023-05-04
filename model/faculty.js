const mongoose = require('mongoose')

const facultySchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        company : {
            type : String,
            required : true
        },
        designation : {
            type : String,
            required : true
        },
        place : {
            type : String,
            required : true
        }
    }
)

const facultyModel = mongoose.model(
    "facultyrecords", facultySchema
)

module.exports = {facultyModel}