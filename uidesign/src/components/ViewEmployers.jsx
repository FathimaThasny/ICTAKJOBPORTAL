import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ViewEmployers = () => {
  const apiUrl = "http://localhost:1000/api/viewemployee"
  const deleteApi = "http://localhost:1000/api/deleteemployee"

  const [data,setData] = useState([])

  useEffect(()=>{
    axios.post(apiUrl).then(
      (response) =>{
        setData(response.data)
    }
    )
  },[]
  )

  const clickDelete = (event) =>{
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

const setUser=(id,company,email,website,address,district,state,description,personname,personalmail,designation,personalnumber)=>{
    localStorage.setItem("_id",id);
    localStorage.setItem("company",company);
    localStorage.setItem("companyemail",email);
    localStorage.setItem("website",website);
    localStorage.setItem("address",address);
    localStorage.setItem("district",district);
    localStorage.setItem("state",state);
    localStorage.setItem("description",description);
    localStorage.setItem("personname",personname);
    localStorage.setItem("personalmail",personalmail);
    localStorage.setItem("designation",designation);
    localStorage.setItem("personalnumber",personalnumber);

  }


  return (
    <div>
      <table class="table table-striped table-hover table-bordered border-secondary">
  <thead>
    <tr>
      <th scope="col">Sl No.</th>
      <th scope="col">Name</th>
      <th scope="col">Company</th>
      <th scope="col">Website</th>
      <th scope="col">Description</th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
  {data.map(
    (user,index) =>{
      return <tr key={user._id}>
        <td>{index+1}</td>
        <td>{user.personname}</td>
        <td>{user.company}</td>
        <td>{user.website}</td>
        <td>{user.description}</td>
        <td className='table-borderless'>
        <Link className="btn btn-warning" to={'/editprofile'} onClick={()=>setUser(user._id,user.company,user.companyemail,user.website,user.address,user.district,user.state,user.description,user.personname,user.personalmail,user.designation,user.personalnumber)} >Edit</Link>
        </td>  
        <td>                
        <button className="btn btn-danger mx-3" value={user._id} onClick={clickDelete}>Delete</button>
        </td>
      </tr>
    }
    )}
  </tbody>
</table>
    </div>
  )
}
