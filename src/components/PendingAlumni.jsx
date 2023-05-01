import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HeaderAdmin } from './HeaderAdmin'

export const PendingAlumni = () => {
    const ApiUrl = "http://localhost:1000/api/pendingalumni"
    const deleteApi = "http://localhost:1000/api/pendingalumni"
    const [data,setData] = useState([])

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
          <button className="btn btn-success">Verify</button>
          <button className="btn btn-danger" value={user._id} onClick={deleteData}>Reject</button>
          </div>
          </ul>
          })}
          </div>
              </div>
  )
}
