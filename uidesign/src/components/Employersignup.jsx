import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Header } from './Header'

export const Employersignup = () => {

    const [input,setInput] = useState({})

    const navigate = useNavigate()

    const apiUrl ="http://localhost:1000/api/addemployee"

    const changeData = (event) =>{

        setInput({
            ...input,[event.target.name]:event.target.value
        })
        console.log(input)
    }

    const clickRegister = () =>{
        axios.post(apiUrl,input)
        .then(response =>{
            console.log(response)
            alert(response.data.status)
            navigate('/employlogin')
        })
    }

  return (
    <div>
        <Header/>
        <div className="container">
            
            <div className="row g-3">
                {/* <h1 className="heading fw-Bolder">EMPLOYEE APP</h1> */}
                {/* <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-3"> */}
                {/* <div className="form-check form-check-inline">
                   <input className="form-check-input" type="radio" name="role" id="inlineRadio1" value="user" onClick={changeData} ></input>
                   <label className="form-check-label" for="inlineRadio1">USER</label>
                </div>
                <div className="form-check form-check-inline">
                   <input className="form-check-input" type="radio" name="role" id="inlineRadio2" value="admin" onClick={changeData}></input>
                   <label className="form-check-label" for="inlineRadio2">ADMIN</label>
                </div> */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-2">

                    <label htmlFor="" className="form-label">Company Name</label>
                    <input name='company' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Company Email</label>
                    <input name='companyemail' type="email" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Official Website</label>
                    <input name='website' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Address</label>
                    <textarea name='address' className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">District</label>
                    <input name='district' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">State</label>
                    <input name='state' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Company Description </label>
                    <textarea name='description' className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Contact Person's Name</label>
                    <input name='personname' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Contact Email</label>
                    <input name='personalmail' type="email" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Designation</label>
                    <input name='designation' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Contact Number</label>
                    <input name='personalnumber' type="text" className="form-control" onChange={changeData}/>
                </div>
                {/* <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input name='password' type="password" className="form-control" onChange={changeData}/>
                </div> */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4">
                    <button onClick={clickRegister} className="btn btn-success btn-hover">Register</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                <label htmlFor="" className="form-label">Already Have an Account? 
                <Link to={'/signin'} className='mx-3'>SignIn</Link></label>
            </div>
            </div>
            </div>
        {/* </div> */}
    </div>
  )
}
