import React, { useEffect, useState } from 'react'
import logo from '../images/logosmall.png';
import profileicon from './img/profileicon.png'
import axios from 'axios';


export const Header = () => {
  const [visible,setVisible] = useState(true)
  const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))
  const [view,setView] = useState(true)
  const [viewoption,setViewoption] = useState(true)
  const [viewprofile,setViewprofile] = useState(true)
  const [option,setOption] = useState(true)


  useEffect(()=>{
    let role = sessionStorage.getItem("role")
    console.log(role)

    if ((usertoken)&&(role === 'alumni'))
        {
            setVisible(true)
        }
        else{
            setVisible(false)
        }
        
      if((usertoken) && ((role == 'employer') || (role === 'admin')))
      {
        setView(true)
      }
      else{
        setView(false)
        }
        if((usertoken) && (role === 'employer'))
      {
        setViewprofile(true)
      }
      else{
        setViewprofile(false)
        }
        if((usertoken) && (role == 'admin'))
      {
        setViewoption(true)
      }
      else{
        setViewoption(false)
        }
        if((usertoken) && ((role === 'employer') || (role === 'alumni') || (role === 'admin')))
        {
          setOption(false)
        }
        else{
          setOption(true)
          }

  },[])

  // const apiURL="http://localhost:3000/api/getemployerdetails"
  //   const clickEdit = () =>{
  //     const 
  //       axios.get(apiURL)
  //       .then(response =>{
  //           console.log(response)
       
            
  //       })
  //   }

  const logout = ()=> {
       sessionStorage.removeItem("usertoken")
       sessionStorage.removeItem("role")
    };

  return (
    <div className='md-3'>

        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark fixed-top md-5">
    <div className="container-fluid m-0">
       
      <img src={logo} alt="logo"/>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse"  id="navbarToggleExternalContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          {!view &&
          <li className="nav-item p-2">
            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>}
          {viewoption &&
          <li className="nav-item p-2">
            <a className="nav-link active text-white" aria-current="page" href="/adminhome">Home</a>
          </li>}
          {visible &&
          <li className="nav-item p-2">
            <a className="nav-link active text-white" aria-current="page" href="/">Applied Jobs</a>
          </li>}
          
          {view &&
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/postnewjob">Post a Job</a>
          </li>}
          {view &&
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/postedjobs">Posted Jobs</a>
          </li>}
          {/* {view &&
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/">Notification</a>
          </li>} */}
          {visible &&
           <div className="btn-group">
           <button className="btn btn-secondary ms-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <img id="profile" alt='' src={profileicon}/>
           </button>
         
           <ul className="dropdown-menu dropdown-menu-end bg-light">
           <li><a className="dropdown-item"  href="/alumnipasswordupdate">Update Password</a></li>
          <li><a className="dropdown-item" onClick={logout} href="/">Log out</a></li>
           </ul>
         </div>}
         {viewprofile &&
           <div className="btn-group">
           <button className="btn btn-secondary ms-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <img id="profile" alt='' src={profileicon}/>
           </button>
         
           <ul className="dropdown-menu dropdown-menu-end bg-light">
           <li><a className="dropdown-item"  href="/employpasswordupdate">Update Password</a></li>
          <li><a className="dropdown-item" onClick={logout} href="/">Log out</a></li>
           </ul>
         </div>}
          {viewoption &&
          <li className="nav-item p-2">
            <a className="nav-link text-white" onClick={logout} href="/employlogin">Logout</a>
          </li>}
          {option &&
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/alumnilogin">SignIn</a>
          </li>}
          {option &&
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/employlogin">Post a Job/Employer</a>
          </li>}

          
          
          
        </ul>
       
      </div>
    </div>
  </nav>


    </div>
  )
}
