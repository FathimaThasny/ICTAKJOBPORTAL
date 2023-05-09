import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'

export const ViewAlumnis = () => {

  const apiUrl = "http://localhost:1000/api/viewalumni"
  const deleteApi = "http://localhost:1000/api/deletealumni"
  const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))


  const [data,setData] = useState([])

  useEffect(()=>{
    axios.post(apiUrl,{"token": usertoken}).then(
      (response) =>{
        console.log(response)
        setData(response.data)
    }
    )
  },[]
  )

  const clickDelete = (event) =>{
    const element = {
        "_id" : event.target.value,
        "token": usertoken
    }
    console.log(element)
     axios.post(deleteApi,element)
     .then(response=>{
            console.log(response)
            console.log("first")
            if(response.data.status=== 'Data Deleted'){
                window.location.reload(true)
            }
        }
    )      
}

const setUser=(id,name,email,phone,highestQualification,course,batch,placementStatus)=>{
    localStorage.setItem("_id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("phone",phone);
    localStorage.setItem("highestQualification",highestQualification);
    localStorage.setItem("course",course);
    localStorage.setItem("batch",batch);
    localStorage.setItem("placementStatus",placementStatus);
    // localStorage.setItem("CompanyName",company);
  }


  return (
    <div>
      <Header/>
      <div className="container mt-5">
      <div className="row mt-5 pt-5">
      <table className="table fleft table-hover table-bordered border-secondary">
  <thead>
    <tr className='bg-warning'>
      <th scope="col">Sl No.</th>
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
    (user,index) =>{
      return <tr key={user._id}>
        <td>{index+1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.course}</td>
        <td>{user.batch}</td>
        <td className='table-borderless'>
        <Link className="btn " to={'/editalumni'} onClick={()=>setUser(user._id,user.name,user.email,user.phone,user.highestQualification,user.course,user.batch,user.placementStatus)} ><i className="bi bi-pencil-fill"></i></Link>
        </td>  
        <td>                
        <button className="btn mx-3" value={user._id} onClick={clickDelete}><i className="bi bi-trash-fill"/></button>
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
