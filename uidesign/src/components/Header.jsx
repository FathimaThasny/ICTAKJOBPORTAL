import React from 'react'
import logo from '../images/logosmall.png';

export const Header = () => {
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
          <li className="nav-item p-2">
            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>
          
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/alumnilogin">SignIn</a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link text-white" href="/employlogin">Post a Job/Employer</a>
          </li>

          
          
          
        </ul>
       
      </div>
    </div>
  </nav>


    </div>
  )
}
