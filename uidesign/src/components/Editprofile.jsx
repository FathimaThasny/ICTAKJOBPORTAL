import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import profileicon from './img/profileicon.png'
import{Headeremployer} from './Headeremployer'
export const Editprofile = () => {

    const [input,setInput] = useState({})

    const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))


    const navigate = useNavigate()

    const [company,setCompany] = useState('')
    const [companyemail,setEmail] = useState('')
    const [website,setWebsite] = useState('')
    const [address,setAddress] = useState('')
    const [district,setDistrict] = useState('')
    const [state,setState] = useState('')
    const [description,setDiscription] = useState('')
    const [personname,setPersonname] = useState('')
    const [personalmail,setPersonalmail] = useState('')
    const [designation,setDesignation] = useState('')
    const [personalnumber,setPersonalnumber] = useState('')
    const [_id,setId] = useState(null)

    const apiUrl ="http://localhost:3000/api/api/updatemployer"

    useEffect(() =>{
        setCompany(localStorage.getItem("company"))
        setEmail(localStorage.getItem("companyemail"))
        setWebsite(localStorage.getItem("website"))
        setAddress(localStorage.getItem("address"))
        setDistrict(localStorage.getItem("district"))
        setState(localStorage.getItem("state"))
        setDiscription(localStorage.getItem("description"))
        setPersonname(localStorage.getItem("personname"))
        setPersonalmail(localStorage.getItem("personalmail"))
        setDesignation(localStorage.getItem("designation"))
        setPersonalnumber(localStorage.getItem("personalnumber"))
        setId(localStorage.getItem("_id"))
        console.log("inside useeffect")
        // console.log(_id)
    },[])

    const clickUpdate = () =>{
        const employeeData = {
            "_id": _id,
            "company" : company,
        "companyemail" : companyemail,
        "website" : website,
        "address" : address,
        "district" : district,
        "state" : state,
        "description" : description,
        "personname" : personname,
        "personalmail" :personalmail,
        "designation" : designation,
        "personalnumber" : personalnumber,
            "token": usertoken
        }
        axios.put(apiUrl,employeeData)
        .then(response =>{
            console.log(response)
            alert(response.data.status)
            navigate('/')
        })
    }

  return (
    <div>
        <Headeremployer/>
        <div className="container">
            
            <div className="row g-3">
                {/* <h1 className="heading fw-Bolder">EMPLOYEE APP</h1> */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-3">
                
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">

                    <label htmlFor="" className="form-label">Company Name</label>
                    <input name='company' type="text" className="form-control" onChange={(e)=> setCompany(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Company Email</label>
                    <input name='companyemail' type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Official Website</label>
                    <input name='website' type="text" className="form-control" onChange={(e)=> setWebsite(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label className="form-label">Address</label>
                    <textarea name='adress' className="form-control" onChange={(e)=> setAddress(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">District</label>
                    <input name='district' type="text" className="form-control" onChange={(e)=> setDistrict(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                    <label htmlFor="" className="form-label">State</label>
                    <input name='state' type="text" className="form-control" onChange={(e)=> setState(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06">
                    <label htmlFor="" className="form-label">Company Description </label>
                    <textarea name='description' className="form-control" onChange={(e)=> setDiscription(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Contact Person's Name</label>
                    <input name='personname' type="text" className="form-control" onChange={(e)=> setPersonname(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Contact Email</label>
                    <input name='personalmail' type="email" className="form-control" onChange={(e)=> setPersonalmail(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Designation</label>
                    <input name='designation' type="text" className="form-control" onChange={(e)=> setDesignation(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Contact Number</label>
                    <input name='personalnumber' type="text" className="form-control" onChange={(e)=> setPersonalnumber(e.target.value)}/>
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
