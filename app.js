const express = require('express')
const cors = require('cors')
const nodemailer = require("nodemailer");
const bodyparser = require('body-parser')
const { employeeModel } = require('./model/employee')
const { facultyModel } = require('./model/faculty')
const { jobModel } = require('./model/jobpost')
const {alumniAddModel} = require('./model/alumniAddModel')

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
    res.json({status : "Registration Successfull. Please wait for the Conformation From Admin"})

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


//----------view employer conformation--------
app.post('/api/pendingemployer',async(req, res)=>{

    let data = await employeeModel.find()
    console.log("first")
    let newarray = data.filter(item=> item.confirmed===false)
    res.json(newarray)
})

//----------view alumni conformation--------
app.post('/api/pendingalumni',async(req, res)=>{

    let data = await alumniAddModel.find()
    console.log("first")
    let newarray = data.filter(item=>item.confirmed===false)
    res.json(newarray)
})

//-----------verifying employer----------
app.post('/api/verifyemployer', async(req,res)=>{
    console.log(req.body)
    let data = await employeeModel.findOneAndUpdate({"_id":req.body._id},req.body)
    console.log("data in server")
    console.log(data)
    sendConfirmationEmail(
        data.personname,
        data.personalmail,
        data.password
 );
 res.json({status : 'Account Verified'})
})

//------------verifying alumni------------
app.post('/api/verifyalumni', async(req,res)=>{
    console.log(req.body)
    let data = await alumniAddModel.findOneAndUpdate({"_id":req.body._id},req.body)
    console.log("data in server")
    console.log(data)
    sendConfirmationEmail(
        data.name,
        data.email,
        data.password
 );
 res.json({status : 'Account Verified'})
})

//----------------mail using nodemailer------------------
const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "fathimathasny4@gmail.com",
      pass: "eesmmebkmejafbud"
    },
  });
  const sendConfirmationEmail = (name, email, password) => {
    console.log("Check");
    transport.sendMail({
      from: "fathimathasny4@gmail.com",
      to: email,
      subject: "Account Verified!",
      html: `<h1>Welcome!</h1>
          <h2>Hello ${name}</h2>
          <p>Your Account has been Verified by Admin.</p>
          <p> You can Sign In using following Credentials...</p>
          <p>Username: ${email}</p>
          <p>password: ${password}</p>
          </div>`,
    }).catch(err => console.log(err));
  };


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
    let data=await jobModel.findByIdAndDelete//----------delete faculty----------
    app.post('/api/deletefaculty', async(req,res)=>{
    
        let data = await facultyModel.findByIdAndDelete(req.body)
        res.json({status : 'Data Deleted'})
    })
    response.json({status : "Job Deleted"})
})


//update job posting
app.post('/api/updatejob',async (req,res)=>{
    let data=await jobModel.findOneAndUpdate({"id":req.body.id}, req.body)
    res.json(data)
})




//============================ALUMINI SIDE CODE=================================================================================
//  Register Alumni
app.post('/api/alumniregister',async(req,res)=>{
    let data =await new alumniAddModel(req.body)
    data.save()
    res.json({status : 'One Data Saved'})
    console.log(data)
    console.log("Alumni registration Success")
})


//view Alumni
app.post('/api/viewalumni', async(req,res)=>{

    let data = await alumniAddModel.find()
    res.json(data)

})

//----------delete alumni----------
app.post('/api/deletealumni', async(req,res)=>{

    let data = await alumniAddModel.findByIdAndDelete(req.body)
    res.json({status : 'Data Deleted'})
})

//--------------selecting one alumni----------
app.post('/api/selectAlumni',async(req,res)=>{
    let data = await alumniAddModel.findOne(req.body)
    res.json(data)
})

