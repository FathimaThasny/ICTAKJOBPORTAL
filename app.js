const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const { employeeModel } = require('./model/employee')
const { facultyModel } = require('./model/faculty')
const { jobModel } = require('./model/jobpost')

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

require('./database/connection.js') //database connection

//---------Server port-----------
app.listen(1000,()=>{

    console.log("Server Running at 1000")
})



//===========================================================ADMIN SIDE CODES==============================================================


//---------add employee----------
app.post('/api/addemployee', async(req,res)=>{

    let data = new employeeModel(req.body)
    data.save()
    res.json({status : "Added One Employee"})

})


//---------view employee---------
app.post('/api/viewemployee', async(req,res)=>{

    let data = await employeeModel.find()
    res.json(data)

})


//---------edit employee----------
app.post('/api/editemployee', async(req,res)=>{

    let data = await employeeModel.findOneAndUpdate({"_id":req.body._id},req.body)
    res.json({status : 'Data Updated'})

})


//---------delete employee---------
app.post('/api/deleteemployee', async(req,res)=>{

    let data = await employeeModel.findByIdAndDelete(req.body)
    res.json({status : 'Data Deleted'})

})



//----------add faculty----------
app.post('/api/addfaculty',async(req, res)=>{

    let data = await new facultyModel(req.body)
    data.save()
    res.json({status : ' Added One Faculty'})

})

//---------view faculty----------
app.post('/api/viewfaculty', async(req,res)=>{

    let data = await facultyModel.find()
    res.json(data)

})

//----------edit faculty----------
app.post('/api/editfaculty', async(req,res)=>{

    let data = await facultyModel.findOneAndUpdate({"_id":req.body._id}, req.body)
    res.json({status : 'Data Updated'})
})

//----------delete faculty----------
app.post('/api/deletefaculty', async(req,res)=>{

    let data = await facultyModel.findByIdAndDelete(req.body)
    res.json({status : 'Data Deleted'})
})





//========================================================EMPLOYER SIDE CODES================================================================

//posting job psoting into db
app.post('/api/newjobpost',async(req,res)=>{
    let data =new jobModel(req.body)
    console.log(data)
    data.save()
    res.json({status:"Success"})
})


//getting job posting from db
app.get('/api/viewalljobs', async(req,res)=>{
    let data=await jobModel.find()
    res.json(data)
})


//delete a job
app.post('/api/deletejob', async (req,response)=>{
    let data=await jobModel.findByIdAndDelete(req.body)
    response.json({status : "Job Deleted"})
})


//update job posting
app.post('/api/updatejob',async (req,res)=>{
    let data=await jobModel.findOneAndUpdate({"id":req.body.id}, req.body)
    res.json(data)
})




//============================ALUMINI SIDE CODE=================================================================================
