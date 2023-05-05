import React, { useState } from 'react'
import logo from '../images/logosmall.png';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const LoginEmployer = () => {

  const apiUrl = "http://localhost:1000/api/employlogin"

  const [input,setInput] = useState({})

  const navigate = useNavigate()

  const changeData = (event) =>{

      setInput({
          ...input,[event.target.name]:event.target.value
      })
  }

  const clickLogin = () =>{
      axios.post(apiUrl,input)
      .then(response =>{
          console.log(response)
          if(response.data.msg === "login successful"){
              // const token = response.data.token
              // console.log(response.data.data)
              // const userId = response.data.data._id
              // let role = response.data.data.role

              // console.log(role)

              // sessionStorage.setItem("userToken",token)
              // sessionStorage.setItem("userId",userId)
              // sessionStorage.setItem("role",role)
              console.log("employe")
              navigate("/home")
          }else if(response.data.status === "Login Successful as ADMIN"){
            console.log("admin")
            navigate("/adminhome")
          }
          else{
              alert("Invalid Credentials")
          }
      
      })
  }


  return (
    <div>
    <Header/>
    <br /> <br />
    <section className='login-page pt-5'>
      <div className="container align-items-center">
            <div className="col-md-6 pt-5">
                <div className="card border-0 rounded-3 w-75 h-25 shadow mx-auto" style={{position : "relative"}}>
                    <div className="card-body p-0">
                        <div className="row no-gutters flex-column flex-sm-row">
                            <div className="col col-sm-4 d-flex align-items-center justify-content-sm-center pt-5 pl-5 pt-sm-0 pl-sm-0 border-end">
                                <img src={logo} alt="" className="img-fluid"/>
                            </div>
                            <div className="col col-sm-8">
                                <div className="p-4 d-grid gap-2">
                                    <h4>Employer SignIn</h4>
                                    <p className="mb-3">to access the portal</p>
                                    <div className='datafields'>
                                        <div className="form-group p-2 ">
                                            <input type="text" className="form-control" placeholder="Email" name="personalmail"  min="8" onChange={changeData}/>
                                        </div>
                                        <div className="form-group p-2">
                                            <input type="password" className="form-control" placeholder="Password" name="password" onChange={changeData}/>
                                        </div>
                                        <div className="my-3">
                                            <a href="/" className="only-link text-primary hover" style={{textDecoration: "none"}}>Forgot Password?</a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <a href="/employsignup" className="text-primary only-link" style={{textDecoration: "none"}}>Register Now</a>
                                            <button type="submit" className="btn btn-primary btn-hover" onClick={clickLogin}>Sign in</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
