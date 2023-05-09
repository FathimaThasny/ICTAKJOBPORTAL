import React, { useEffect, useState } from 'react'
import { HeaderAdmin } from './HeaderAdmin'
import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'
import { Header } from './Header'



export const Adminhome = () => {

  const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))
  const navigate = useNavigate()

  useEffect(()=>{
    let role = sessionStorage.getItem("role")
    console.log(role)
    if((role !== "admin")){
      console.log("error")
      navigate("/employlogin")
    }
  })

  return (
    <div>
      <Header/>
      <div className='container'>
        <div className="row justify-content-center align-items-center ms-5 ps-5 w-75 h-75 g-5">
          <div className="col col-md-5">
            <div className="card d-flex flex-column" style={{width: "50%"}}>
              <div className="card-body">
                <h5 className="card-title">Verify <br /> Employer</h5>
                <p className="card-text">List of Employers that are Registered to, and waiting for Confirmation</p>
                <a href="/pendingemployer" className="btn btn-primary">View List</a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card d-flex flex-column" style={{width: "50%"}}>
              <div className="card-body">
                <h5 className="card-title">Verify Candidate</h5>
                <p className="card-text">List of Alumnis that are Registered to, and waiting for Confirmation</p>
                <a href="/pendingalumni" className="btn btn-primary">View List</a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card d-flex flex-column" style={{width: "50%"}}>
              <div className="card-body">
                <h5 className="card-title">View All Candidate</h5>
                <p className="card-text">List of all Alumnis that are Registered to the site</p>
                <a href="/viewalumni" className="btn btn-primary">View List</a>
              </div>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="card d-flex flex-column" style={{width: "50%"}}>
              <div className="card-body">
                <h5 className="card-title">View All Employers</h5>
                <p className="card-text">List of all Employers that are Registered to the site</p>
                <a href="/viewemployer" className="btn btn-primary">View List</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
   


  )
}
