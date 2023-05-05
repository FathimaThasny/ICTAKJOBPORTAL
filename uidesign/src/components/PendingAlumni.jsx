import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HeaderAdmin } from './HeaderAdmin'

export const PendingAlumni = () => {
    const ApiUrl = "http://localhost:1000/api/pendingalumni"
    const deleteApi = "http://localhost:1000/api/deletealumni"
    const verificationApi="http://localhost:1000/api/verifyalumni"
    const [data,setData] = useState([])
    const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))


    useEffect(()=>{
        axios.post(ApiUrl,{"token": usertoken}).then(
            (response)=>{
                console.log(response)
                setData(response.data)
            }
        )
    },[]
    )

    const deleteData = (event)=>{
      const element = {
        "_id" : event.target.value,
        "token": usertoken
      }
    console.log(element)
     axios.post(deleteApi,element)
     .then(response=>{
            console.log(response)
            if(response.data.status=== 'Data Deleted'){
                window.location.reload(true)
            }
        }
    )     
    }

    function genPassword() {
      // console.log(event)
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var passwordLength = 8;
      var password = "";
   for (var i = 0; i <= passwordLength; i++) {
     var randomNumber = Math.floor(Math.random() * chars.length);
     password += chars.substring(randomNumber, randomNumber +1);
    }
          return password
   }

   const verifyData = (id,name,email,phone,qualification,course,batch,placementStatus,company)=>{
    let pswdgenrated = genPassword()
    console.log(pswdgenrated)
    // console.log(event.confirmed)
    console.log("setting data")
    const input = {
      "_id": id,
      "name": name,
      "email": email,
      "phone": phone,
      "highestQualification": qualification,
      "course": course,
      "batch": batch,
      "placementStatus": placementStatus,
      "CompanyName": company,
      "confirmed":true,
      "password":pswdgenrated,
      "token":usertoken
    }
    console.log("input")
    console.log(input)
    axios.post(verificationApi,input)
    .then(response=>{
      console.log(response)
      if(response.data.status=== 'Account Verified'){
          window.location.reload(true)
      }
  }
)     
  }


  return (
<div>
  <HeaderAdmin/>
        <div className="card">
  <div className="card-header">
Pending Requests  </div>
    {data.map(
        (user)=>{
            return  <ul className='list-group list-group-flush'>
            <div className="card-body" key={user._id} style={{borderBottom:"1px"}}>
            <h5 className="card-title">{user.name}</h5>
            {/* <p className="card-text">{user.description}</p> */}
          </div>
          <p className="card-text">Mail : {user.email}</p>
          <p className="card-text">Course : {user.course}</p>
            <p className="card-text"><b>Batch : {user.batch}</b></p>
            {/* <p className="card-text">Designation : {user.designation}</p> */}
            {/* <p className="card-text "><a href={user.website} className="card-text">{user.website}</a></p> */}
          <div className="card-body">
          <button className="btn btn-success" onClick={()=>verifyData(user._id,user.name,user.email,user.phone,user.qualification,user.course,user.batch,user.placementStatus,user.company)}>Verify</button>
          <button className="btn btn-danger" value={user._id} onClick={deleteData}>Reject</button>
          </div>
          </ul>
          })}
          </div>
              </div>
  )
}
