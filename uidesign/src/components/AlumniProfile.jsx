import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
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
//   const [CompanyName,setCompanyName] = useState('')

  const [_id,setId] = useState(null)

  const apiUrl ="http://localhost:1000/api/editalumni"

  useEffect(() =>{
      setName(localStorage.getItem("name"))
      setEmail(localStorage.getItem("email"))
      setPhone(localStorage.getItem("phone"))
      setHighestQualification(localStorage.getItem("highestQualification"))
      setCourse(localStorage.getItem("course"))
      setBatch(localStorage.getItem("batch"))
      setPlacementStatus(localStorage.getItem("placementStatus"))
    //   setCompanyName(localStorage.getItem("CompanyName"))
 
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
          "highestQualification":highestQualification,
          "course":course,
          "batch":batch,
          "placementStatus":placementStatus,
        //   "CompanyName":CompanyName,
          
      
          "token": usertoken
      }
      console.log(employeeData)
      axios.post(apiUrl,employeeData)
      .then(response =>{
          console.log(response)
          if(response.data.status==="Data Updated")
          {
            window.location.replace('/adminhome')
          }
      })
  }
  const clickCancel = ()=>{
    navigate('/adminhome')
  }
  const styles = {

    width : '1000px',
    padding : '0px 0px 0px 300px'
  };

  return (
    <div>
    <Header/>
    <div className="container" >
    <form className="form justify-content-center m-5 p-5">
  
        <div className="row g-3 col col-12 col-sm-12 col-md-12">

            {/* <h1 className="heading fw-Bolder">EMPLOYEE APP</h1> */}
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-3">
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">

                <label htmlFor="" className="form-label">Name</label>
                <input name='name' type="text" value={name} className="form-control" onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                <label htmlFor="" className="form-label">Email</label>
                <input name='email' type="email" value={email} className="form-control" readOnly />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                <label htmlFor="" className="form-label">Phone_No</label>
                <input name='phone' type="text" value={phone} className="form-control" onChange={(e)=> setPhone(e.target.value)}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                <label className="form-label">Highest Qualification</label>
                <input type='text' name='highestQualification' value={highestQualification} className="form-control" onChange={(e)=> setHighestQualification(e.target.value)}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                <label htmlFor="" className="form-label">Course</label>
                <input name='course' type="text" value={course} className="form-control" onChange={(e)=> setCourse(e.target.value)}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                <label htmlFor="" className="form-label">Batch</label>
                <input name='batch' type="text" value={batch} className="form-control" onChange={(e)=> setBatch(e.target.value)}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Placement Status</label>
                <input type='text' name='placementStatus' value={placementStatus} className="form-control" onChange={(e)=> setPlacementStatus(e.target.value)}/>
            </div>
            {/* <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06">
                <label htmlFor="" className="form-label">Company Name</label>
                <input type='text' name='CompanyName' value={CompanyName} className="form-control" onChange={(e)=> setCompanyName(e.target.value)}/>
            </div> */}
            
            <div className="d-flex">
                    <button name="registerempbtn" onClick={clickUpdate} className="btn btn-success btn-hover m-3">Update</button>
                    <button name="registerempbtn" onClick={clickCancel} className="btn btn-warning btn-hover m-3">Cancel</button>
            </div>

            
        </div>
        </div>
        </form>

    </div>
</div>
  )
}
