import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import profileicon from './img/profileicon.png'
import{Headeremployer} from './Headeremployer'
import { Header } from './Header'
export const AlumniProfile = () => {

  const [input,setInput] = useState({})

  const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))


  const navigate = useNavigate()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [highestQualification,setHighestQualification] = useState('')
  const [course,setCourse] = useState('')
  const [batch,setBatch] = useState('')
  const [placementStatus,setPlacementStatus] = useState('')
  const [CompanyName,setCompanyName] = useState('')

  const [_id,setId] = useState(null)

  const apiUrl ="http://localhost:1000/api/selectAlumni"

  useEffect(() =>{
      setName(localStorage.getItem("name"))
      setEmail(localStorage.getItem("email"))
      setPhone(localStorage.getItem("phone"))
      setHighestQualification(localStorage.getItem("highestQualification"))
      setCourse(localStorage.getItem("course"))
      setBatch(localStorage.getItem("batch"))
      setPlacementStatus(localStorage.getItem("placementStatus"))
      setCompanyName(localStorage.getItem("CompanyName"))
 
      setId(localStorage.getItem("_id"))
      console.log("inside useeffect")
      // console.log(_id)
  },[])

  const clickUpdate = () =>{
      const employeeData = {
          "_id": _id,
          "name" : name,
          "email" : email,
          "phone" :phone,
          "highestQualification ": highestQualification  ,
          "course":course,
          "batch":batch,
          "placementStatus":placementStatus,
          "CompanyName":CompanyName,
          
      
          "token": usertoken
      }
      axios.put(apiUrl,employeeData)
      .then(response =>{
          console.log(response)
          alert(response.data.status)
          navigate('/')
      })
  }
  const styles = {

    width : '1000px',
    padding : '0px 0px 0px 300px'
  };

  return (
    <div>
    <Header/>
    <div className="container" >
        
        <div className="row g-3">
            {/* <h1 className="heading fw-Bolder">EMPLOYEE APP</h1> */}
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-3">
            
            <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">

                <label htmlFor="" className="form-label">Name</label>
                <input name='name' type="text" className="form-control" onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                <label htmlFor="" className="form-label">Email</label>
                <input name='email' type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                <label htmlFor="" className="form-label">Phone_No</label>
                <input name='phone' type="text" className="form-control" onChange={(e)=> setPhone(e.target.value)}/>
            </div>
            <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                <label className="form-label">Highest Qualification</label>
                <textarea name='highestQualification' className="form-control" onChange={(e)=> setHighestQualification(e.target.value)}/>
            </div>
            <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                <label htmlFor="" className="form-label">Course</label>
                <input name='course' type="text" className="form-control" onChange={(e)=> setCourse(e.target.value)}/>
            </div>
            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <label htmlFor="" className="form-label">Batch</label>
                <input name='batch' type="text" className="form-control" onChange={(e)=> setBatch(e.target.value)}/>
            </div>
            <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06">
                <label htmlFor="" className="form-label">Placement Status</label>
                <textarea name='placementStatus' className="form-control" onChange={(e)=> setPlacementStatus(e.target.value)}/>
            </div>
            <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06">
                <label htmlFor="" className="form-label">Company Name</label>
                <textarea name='CompanyName' className="form-control" onChange={(e)=> setPlacementStatus(e.target.value)}/>
            </div>
            
            <div className="d-flex">
                <div className="col col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 mt-4">
                    <button name="registerempbtn" onClick={clickUpdate} className="btn btn-success btn-hover">Update</button>
                </div>
                <div className="col col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 mt-4">
                    <button name="registerempbtn" onClick="/home" className="btn btn-success btn-hover">Cancel</button>
                </div>
            </div>

            
        </div>
        </div>
    </div>
</div>
  )
}
