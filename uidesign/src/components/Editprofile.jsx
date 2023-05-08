import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import profileicon from './img/profileicon.png'
import{Headeremployer} from './Headeremployer'
import { Header } from './Header'
export const Editprofile = () => {

    const [data,setData] = useState({})
    const [input,setInput] = useState({})


    const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))

    const role = sessionStorage.getItem("role")
    const id = sessionStorage.getItem("userId")

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

    const [companyv,changeCompany] = useState('')
    const [companyemailv,changeEmail] = useState('')
    const [websitev,changeWebsite] = useState('')
    const [addressv,changeAddress] = useState('')
    const [districtv,changeDistrict] = useState('')
    const [statev,changeState] = useState('')
    const [descriptionv,changeDiscription] = useState('')
    const [personnamev,changePersonname] = useState('')
    const [personalmailv,changePersonalmail] = useState('')
    const [designationv,changeDesignation] = useState('')
    const [personalnumberv,changePersonalnumber] = useState('')
    // const [uid,changeId] = useState(null)

    const apiUrl ="http://localhost:1000/api/editemployee"
    const apiURL2 = "http://localhost:1000/api/viewaemployer"

    const [visible,setVisible] = useState(false)
    const [view,setView] = useState(false)


    useEffect(() =>{
        if(role==="admin"){
            setView(true)
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
        }
        if(role==="employer")
        {
            setVisible(true)
            const item = {"_id": id,"token": usertoken}
            axios.post(apiURL2,item).then(
                (response)=>{
                  console.log("inside axios")
                  console.log(response.data)
                  setData(response.data)
                }
              )
              console.log("outside axios")
            //   setCompany(data.company)
            //   console.log(company)

        }
        // console.log(_id)
    },[])

    // const changeMyData = (event) => {

    //     setInput({
    //         ...input,[event.target.name]:event.target.value
    //     })
    // }
    const clickUpdate = () =>{
        console.log(role)
        if(role==="admin"){
        const employeeData = {
            "_id": _id,
            // _id,
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
        console.log("inui")
        console.log(employeeData)
        axios.post(apiUrl,employeeData)
        .then(response =>{
            console.log(response)
            // alert(response.data.status)
            if(response.data.status==="Data Updated"){
            navigate('/adminhome')
            }else{
                alert("error")
            }
        })
    }
        if(role==="employer"){
            const employeeData = {
                "_id": id,
                "company" : companyv,
            "companyemail" : companyemailv,
            "website" : websitev,
            "address" : addressv,
            "district" : districtv,
            "state" : statev,
            "description" : descriptionv,
            "personname" : personnamev,
            "personalmail" :personalmailv,
            "designation" : designationv,
            "personalnumber" : personalnumberv,
                "token": usertoken
            }  
            axios.post(apiUrl,employeeData)
        .then(response =>{
            console.log(response)
            // alert(response.data.status)
            navigate('/postnewjob')
        })
        }

        // console.log(employeeData._id)
        
    }

    const clickCancel = () =>{
        navigate('/adminhome')
    }

  return (
    <div>
        <Header/>
        <div className="container " >
        {view&&<form className="form p-5">

            <div className="row g-3" >
                {/* <h1 className="heading fw-Bolder">EMPLOYEE APP</h1> */}
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">

                    <label htmlFor="" className="form-label">Company Name</label>
                    <input name='company' type="text" value={company} className="form-control" onChange={(e)=> setCompany(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Company Email</label>
                    <input name='companyemail' type="email" value={companyemail} className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Official Website</label>
                    <input name='website' type="text" value={website} className="form-control" onChange={(e)=> setWebsite(e.target.value)}/>
                </div>
                
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">District</label>
                    <input name='district' type="text" value={district} className="form-control" onChange={(e)=> setDistrict(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                    <label htmlFor="" className="form-label">State</label>
                    <input name='state' type="text" value={state} className="form-control" onChange={(e)=> setState(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label className="form-label">Address</label>
                    <textarea name='adress' value={address} className="form-control" onChange={(e)=> setAddress(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06">
                    <label htmlFor="" className="form-label">Company Description </label>
                    <textarea name='description' value={description} className="form-control" onChange={(e)=> setDiscription(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Contact Person's Name</label>
                    <input name='personname' type="text" value={personname} className="form-control" onChange={(e)=> setPersonname(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Contact Email</label>
                    <input name='personalmail' type="email" value={personalmail} className="form-control" onChange={(e)=> setPersonalmail(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Designation</label>
                    <input name='designation' type="text" value={designation} className="form-control" onChange={(e)=> setDesignation(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Contact Number</label>
                    <input name='personalnumber' type="text"value={personalnumber} className="form-control" onChange={(e)=> setPersonalnumber(e.target.value)}/>
                </div>
                
                <div className="d-flex m-3 pt-4">
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 fright">
                        <button name="registerempbtn" onClick={clickCancel} className="btn btn-warning btn-hover">Cancel</button>
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 fleft">
                        <button name="registerempbtn" onClick={clickUpdate} className="btn btn-success btn-hover fleft">Update</button>
                    </div>
                    
                </div>
 
                
            </div>
            </form>}
            {visible &&
            <form className="form p-5">

            <div className="row g-3" >
                {/* <h1 className="heading fw-Bolder">EMPLOYEE APP</h1> */}
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">

                    <label htmlFor="" className="form-label">Company Name</label>
                    <input name='company' type="text" value={data.company} className="form-control" onChange={(e)=>changeCompany(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Company Email</label>
                    <input name='companyemail' type="email" value={data.companyemail} className="form-control" onChange={(e)=> changeEmail(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Official Website</label>
                    <input name='website' type="text" value={data.website} className="form-control" onChange={(e)=> changeWebsite(e.target.value)}/>
                </div>
                
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">District</label>
                    <input name='district' type="text" value={data.district} className="form-control" onChange={(e)=> changeDistrict(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                    <label htmlFor="" className="form-label">State</label>
                    <input name='state' type="text" value={data.state} className="form-control" onChange={(e)=> changeState(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label className="form-label">Address</label>
                    <textarea name='adress' value={data.address} className="form-control" onChange={(e)=> changeAddress(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06">
                    <label htmlFor="" className="form-label">Company Description </label>
                    <textarea name='description' value={data.description} className="form-control" onChange={(e)=> changeDiscription(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Contact Person's Name</label>
                    <input name='personname' type="text" value={data.personname} className="form-control" onChange={(e)=> changePersonname(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Contact Email</label>
                    <input name='personalmail' type="email" value={data.personalmail} className="form-control" onChange={(e)=> setPersonalmail(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Designation</label>
                    <input name='designation' type="text" value={data.designation} className="form-control" onChange={(e)=> changeDesignation(e.target.value)}/>
                </div>
                <div className="col col-6 col-sm-6 col-md-6 col-lg-06 col-xl-06 col-xxl-06 mt-3">
                    <label htmlFor="" className="form-label">Contact Number</label>
                    <input name='personalnumber' type="text"value={data.personalnumber} className="form-control" onChange={(e)=> changePersonalnumber(e.target.value)}/>
                </div>
                
                <div className="d-flex m-3 pt-4">
                <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 fright">
                        <button name="registerempbtn" onClick="/postnewjob" className="btn btn-warning btn-hover">Cancel</button>
                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 fleft">
                        <button name="registerempbtn" onClick={clickUpdate} className="btn btn-success btn-hover fleft">Update</button>
                    </div>
                    
                </div>
 
                
            </div>
            </form>}
        </div>
    </div>
  )
            }

