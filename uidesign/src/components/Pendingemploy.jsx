import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HeaderAdmin } from './HeaderAdmin'
import { Header } from './Header'

export const Pendingemploy = () => {

    const ApiUrl = "http://localhost:1000/api/pendingemployer"
    const deleteApi = "http://localhost:1000/api/deleteemployee"
    const verificationApi = "http://localhost:1000/api/verifyemployer"
    const [data,setData] = useState([])
    const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))

    // const [input,setInput] = useState({})


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

    const verifyData = (id,company,email,website,address,district,state,description,personname,personalmail,designation,personalnumber)=>{
      let pswdgenrated = genPassword()
      console.log(pswdgenrated)
      // console.log(event)
      console.log("setting data")
      const input = {
        "_id": id,
        "company": company,
        "companyemail": email,
        "website": website,
        "address": address,
        "district": district,
        "state": state,
        "description": description,
        "personname": personname,
        "personalmail": personalmail,
        "designation": designation,
        "personalnumber": personalnumber,
        "confirmed":true,
        "password":pswdgenrated,
        "token": usertoken
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
<table class="table table-striped table-hover table-bordered border-secondary">
  <thead>
    <tr className='bg-warning'>
      <th scope="col">Name</th>
      <th scope="col">Company</th>
      <th scope="col">Designation</th>
      <th scope="col">Website</th>
      <th scope="col">Description</th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    {data.map(
        (user)=>{
            return  <tr key={user._id}>
            <td>{user.personname}</td>
            <td>{user.company}</td>
            <td>{user.designation}</td>
            <td><a href={user.website}>{user.website}</a></td>
            <td>{user.description}</td>
            <td className='table-borderless'>
          <button className="btn btn-success" onClick={()=>verifyData(user._id,user.company,user.companyemail,user.website,user.address,user.district,user.state,user.description,user.personname,user.personalmail,user.designation,user.personalnumber)}><i class="bi bi-check-lg"></i></button>
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
