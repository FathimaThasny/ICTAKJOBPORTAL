import React from 'react'
import logo from '../images/logosmall.png';

export const Header = () => {
  return (
    <div>

        <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <img src={logo} alt="logo"/>
         <li ><a className="navbar-brand" href="/home">ICT Academy</a></li>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item p-2">
            <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/postnewjob">Post a Job</a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/employsignup">Employer Register</a>
          </li>
          
        </ul>
       
      </div>
    </div>
  </nav>


    </div>
  )
}
