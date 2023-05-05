const express = require('express')
const cors = require('cors')
const nodemailer = require("nodemailer");
const bodyparser = require('body-parser')
const { employeeModel } = require('./model/employee')
const { jobModel } = require('./model/jobpost')
const {alumniAddModel} = require('./model/alumniAddModel');
const { alumniResponseModel } = require('./model/alumniResponseForm');

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


//========================================================EMPLOYER SIDE CODES================================================================

//-------employer login------------
app.post('/api/employlogin',async(req,res)=>{
   
    let mail=req.body.personalmail
    let password=req.body.password

    if(mail === "ictakadmin@gmail.com"){
        if(password === "ICT@admin2023"){
            res.json({status : 'Login Successful as ADMIN'})
            console.log("inside admin")
        }
        else{
            res.json({status:"Password Incorrect"})
        }
    }
    else{

    let user = await employeeModel.findOne({personalmail : mail})
    console.log(user)
    // console.log(user.password)
    console.log(password)
    
    if((!user)){
        res.json({msg: "User not found"})  
    }
    try{
        if (user.confirmed === false) {
            
             res.json({ msg : "Pending Account. Please Wait for Admin conformation"})
           
          }
        else if(user.password===password){
            res.json({msg:"login successful"})
            
            
        }else{
            res.json({msg:"login failed"})
        }}catch(error){
            res.status(400).json({
                message:"An error occured",
                error: error.message
            })
        }
    }
    }
    
)  


//posting job psoting into db
app.post('/api/newjobpost',async(req,res)=>{
    let data =new jobModel(req.body)
    console.log(data)
    data.save()
    res.json({status:"Success"})
})


//getting job posting from db
app.post('/api/viewalljobs', async(req,res)=>{
    let data=await jobModel.find()
    res.json(data)
})


//delete a job
app.post('/api/deletejob', async (req,response)=>{
    let data=await jobModel.findByIdAndDelete
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

// <<<<<<< HEAD
//--------------selecting one alumni----------
app.post('/api/selectAlumni',async(req,res)=>{
    let data = await alumniAddModel.findOne(req.body)
    res.json(data)
})

//-------------- alumni login----------
app.post('/api/alumnilogin',async(req,res)=>{
    console.log("hai")
    let email=req.body.email
    let password=req.body.password

    let data = await alumniAddModel.findOne({email : email})
    console.log(data)
    // console.log(user.password)
    console.log(password)

    if((!data)){
        res.json({msg: "Data not found"})  
    }
    try{
        if (data.confirmed === false) {
            
             res.json({ msg : "Pending Account. Please Wait for Admin conformation"})
           
          }
        else if(data.password===password){
            res.json({msg:"login successful"})
            console.log("hai")
            
            
        }else{
            res.json({msg:"login failed"})
        }}catch(error){
            res.status(400).json({
                message:"An error occured",
                error: error.message
            })
        }
    }
    
)  

// ------------alumni update password-------------------

app.post('/api/alumniupdatepassword', async(req,res)=>{
    console.log(req.body._id)
    let data=await alumniAddModel.findOneAndUpdate({"id":req.body.id}, req.body)
    res.json(data)

})

// ----------------------alumniResponseModel-------------------
app.post('/api/alumniresponseform',async(req,res)=>{
    let data =await new alumniResponseModel(req.body)
    data.save()
    res.json({status : 'response Added '})
    console.log(data)
    console.log("Alumni Response Added")

})
// ----------------------------view alumniResponseModel---------
app.post('/api/viewalumniresponseform', async(req,res)=>{

    let data = await alumniResponseModel.find()
    res.json(data)

})