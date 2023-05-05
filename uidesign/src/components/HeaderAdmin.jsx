import React from 'react'
import logo from '../images/logosmall.png';


export const HeaderAdmin = () => {
  return (
<div className='md-2'>

<nav className="navbar navbar-expand-lg bg-dark fixed-top md-5">
<div className="container-fluid m-0">



<img src={logo} alt="logo"/>
 <li ><a className="navbar-brand" href="/home">ICT Academy</a></li>
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse"  id="navbarToggleExternalContent">
<ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
  <li className="nav-item p-2">
    <a className="nav-link active text-white" aria-current="page" href="/home">Post a job</a>
  </li>
  <li className="nav-item p-2">
    <a className="nav-link text-white" href="/postnewjob">Notification</a>
  </li>
  <li className="nav-item p-2">
    <a className="nav-link text-white" href="/employsignup">Logout</a>
  </li>
  
  
</ul>

</div>
</div>
</nav>


</div>
     )
}
