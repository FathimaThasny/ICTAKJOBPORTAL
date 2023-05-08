import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'

export const ViewEmployers = () => {
  const apiUrl = "http://localhost:1000/api/viewemployee"
  const deleteApi = "http://localhost:1000/api/deleteemployee"
  const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))


  const [data,setData] = useState([])

  useEffect(()=>{
    axios.post(apiUrl,{"token": usertoken}).then(
      (response) =>{
        console.log(response)
        console.log(response.data)
        setData(response.data)
        console.log(data)
    }
    )
  },[]
  )

  const clickDelete = (key) =>{
    console.log(key)
    const element = {
        "_id" : key,
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
            <Header/>

      <div className="container mt-5">
      <div className="row mt-5 pt-5">
      <table class="table table-striped table-hover table-bordered border-secondary">
  <thead>
    <tr className='bg-warning'>
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
        <Link className="btn" to={'/editprofile'} onClick={()=>setUser(user._id,user.company,user.companyemail,user.website,user.address,user.district,user.state,user.description,user.personname,user.personalmail,user.designation,user.personalnumber)} ><i class="bi bi-pencil-fill"></i></Link>
        </td>  
        <td>                
        <button className="btn  mx-3" value={user._id} onClick={()=>clickDelete(user._id)}><i class="bi bi-trash-fill"></i></button>
        </td>
      </tr>
    }
    )}
  </tbody>
</table>
</div>
</div>
    </div>
  )
}
