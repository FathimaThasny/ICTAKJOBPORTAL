const Mongoose = require("mongoose")
const jobSchema  =new Mongoose.Schema(
    {
        titleofrole:{
            type:String,
            required:true
        },
        company:{
            type:String,
            required:true
        },
        place:{
            type:String,
            required:true
        },
        jobtype:{
            type:String,
            required:true
        },
<<<<<<< HEAD
        field:{
            type:String,
            required:true
=======
        Field:{
            type:String
            // required:true
>>>>>>> b3bc86907215f0e2463c214e9ec3c1d2d3f0bc0a
        },
        email:{
            type : String,
            required: true
        },
        experience:{
            type:String,
            required:true
        },
        salary:{
            type:Number,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        createdAt : {type: Date, default: Date.now}

    }
)
//model for jobpost
const jobModel = Mongoose.model(
    "jobvacancy", jobSchema
);
module.exports = {jobModel}