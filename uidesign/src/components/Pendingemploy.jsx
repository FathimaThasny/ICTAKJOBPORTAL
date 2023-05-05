import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HeaderAdmin } from './HeaderAdmin'

export const Pendingemploy = () => {

    const ApiUrl = "http://localhost:1000/api/pendingemployer"
    const deleteApi = "http://localhost:1000/api/deleteemployee"
    const verificationApi = "http://localhost:1000/api/verifyemployer"
    const [data,setData] = useState([])
    // const [input,setInput] = useState({})


    useEffect(()=>{
        axios.post(ApiUrl).then(
            (response)=>{
                console.log(response)
                setData(response.data)
            }
        )
    },[]
    )

    const deleteData = (event)=>{
      const element = {
        "_id" : event.target.value
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
        "password":pswdgenrated
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
            return  <ul className='list-group list-group-flush' key={user._id}>
            <div className="card-body"  style={{borderBottom:"1px"}}>
            <h5 className="card-title">{user.company}</h5>
            <p className="card-text">{user.description}</p>
          </div>
          <p className="card-text">Mail : {user.personalmail}</p>
          <p className="card-text">Address : {user.address}</p>
            <p className="card-text"><b>Employer Name : {user.personname}</b></p>
            <p className="card-text">Designation : {user.designation}</p>
            <p className="card-text "><a href={user.website} className="card-text">{user.website}</a></p>
          <div className="card-body">
          <button className="btn btn-success" onClick={()=>verifyData(user._id,user.company,user.companyemail,user.website,user.address,user.district,user.state,user.description,user.personname,user.personalmail,user.designation,user.personalnumber)}>Verify</button>
          <button className="btn btn-danger" value={user._id} onClick={deleteData}>Reject</button>
          </div>
          </ul>

  })}
</div>
    </div>
  )
}
