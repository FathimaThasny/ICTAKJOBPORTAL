import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import profileicon from './img/profileicon.png'
import{Headeremployer} from './Headeremployer'
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import styled from "styled-components";



export const Editprofile = () => {
    const [input,setInput] = useState({})

    const navigate = useNavigate()

    const apiUrl ="http://localhost:3000/api/api/updatemployer"

    const changeData = (event) =>{

        setInput({
            ...input,[event.target.name]:event.target.value
        })
        console.log(input)
    }
    const notificationClickHandle = () => {
        store.addNotification({
          title: "Wonderful!",
          message: "teodosii@react-notifications-component",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: false
          }
        });
      };
    
    const clickUpdate = () =>{
        axios.put(apiUrl,input)
        .then(response =>{
            console.log(response)
            alert(response.data.status)
            notificationClickHandle();
            navigate('/home')
        })
    }
    const clickBack = () =>{
       
            navigate('/home')
        
    }

  return (
    <div>
        <Headeremployer/>
        <div className="container">
            
            <div className="row g-3">
                {/* <h1 className="heading fw-Bolder">EMPLOYEE APP</h1> */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-3">
                {/* <div className="form-check form-check-inline">
                   <input className="form-check-input" type="radio" name="role" id="inlineRadio1" value="user" onClick={changeData} ></input>
                   <label className="form-check-label" for="inlineRadio1">USER</label>
                </div>
                <div className="form-check form-check-inline">
                   <input className="form-check-input" type="radio" name="role" id="inlineRadio2" value="admin" onClick={changeData}></input>
                   <label className="form-check-label" for="inlineRadio2">ADMIN</label>
                </div> */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">

                    <label htmlFor="" className="form-label">Company Name</label>
                    <input name='company' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">Company Email</label>
                    <input name='companyemail' type="email" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">Official Website</label>
                    <input name='website' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">Address</label>
                    <textarea name='adress' className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-6 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">District</label>
                    <input name='district' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">State</label>
                    <input name='state' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Company Description </label>
                    <textarea name='description' className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">Contact Person's Name</label>
                    <input name='personname' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">Contact Email</label>
                    <input name='personalmail' type="email" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">Designation</label>
                    <input name='designation' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">Contact Number</label>
                    <input name='personalnumber' type="text" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" onChange={changeData}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                    <label htmlFor="" className="form-label">Confirm Password</label>
                    <input name='password' type="password" className="form-control" onChange={changeData}/>
                </div>
                <div className="row">
                <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-4">
                    <button name="registerempbtn" onClick={clickUpdate} className="btn btn-success btn-hover">Update</button>
                </div>
                
                <div className="col col-8 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8 mt-4">
                    <button name="registerempbtn" onClick={clickBack} className="btn btn-success btn-hover">Back</button>
                </div>
                </div>
                
            </div>
            </div>
        </div>
    </div>
  )
}
