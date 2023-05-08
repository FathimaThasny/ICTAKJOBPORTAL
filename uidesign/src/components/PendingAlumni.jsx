import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HeaderAdmin } from './HeaderAdmin'
import { Header } from './Header'

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
  <Header/>
        <div className="container mt-5 pt-5">
  <h5 className="card-header">
Pending Requests  </h5>
<table className="table fleft table-hover table-bordered border-secondary">
  <thead>
    <tr className='bg-warning'>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    {data.map(
        (user)=>{
            return  <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.course}</td>
            <td>{user.batch}</td>
            <td className='table-borderless'>
          <button className="btn btn-success" onClick={()=>verifyData(user._id,user.name,user.email,user.phone,user.qualification,user.course,user.batch,user.placementStatus,user.company)} ><i class="bi bi-check-lg"></i></button>
          </td>
          <td>
          <button className="btn btn-danger" value={user._id} onClick={deleteData}><i class="bi bi-trash-fill"></i></button>
          </td>
          </tr>
    }
    )}
  </tbody>
</table>
          </div>
              </div>
  )
}
