import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HeaderAdmin } from './HeaderAdmin'

export const Pendingemploy = () => {

    const ApiUrl = "http://localhost:1000/api/pendingemployer"
    const deleteApi = "http://localhost:1000/api/deleteemployee"
    const [data,setData] = useState([])
    const [input,setInput] = useState({})


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

    function genPassword(event) {
      console.log(event)
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var passwordLength = 8;
      var password = "";
   for (var i = 0; i <= passwordLength; i++) {
     var randomNumber = Math.floor(Math.random() * chars.length);
     password += chars.substring(randomNumber, randomNumber +1);
    }
          return password
   }

    const verifyData = (event)=>{
      let pswdgenrated = genPassword(event)
      console.log(pswdgenrated)
      console.log(event)
      console.log(event.confirmed)
      // setInput({
      //   ...input,event,[event.confirmed]:true,
      //   "password": pswdgenrated
      // })
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
          <p className="card-text">Mail : {user.companyemail}</p>
          <p className="card-text">Address : {user.address}</p>
            <p className="card-text"><b>Employer Name : {user.personname}</b></p>
            <p className="card-text">Designation : {user.designation}</p>
            <p className="card-text "><a href={user.website} className="card-text">{user.website}</a></p>
          <div className="card-body">
          <button className="btn btn-success" onClick={()=>verifyData(user)}>Verify</button>
          <button className="btn btn-danger" value={user._id} onClick={deleteData}>Reject</button>
          </div>
          </ul>

  })}
</div>
    </div>
  )
}
