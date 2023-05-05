import React from 'react'
import profileicon from './img/profileicon.png'
// import DropdownItem from './DropdownItem'
import axios from 'axios'
export const Headeremployer = () => {
    const apiURL="http://localhost:3000/api/getemployerdetails"
    const clickEdit = () =>{
        axios.get(apiURL)
        .then(response =>{
            console.log(response)
       
            
        })
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ICT Academy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/postnewjob">Post a Job</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/employsignup">Employer Register</a>
                        </li>
                        <li>
                                            <div className="w3-right">
                              
                    <button  type="button" id="profilebtn" data-bs-toggle="dropdown" aria-expanded="false">
                        <img type="button" id="profile" src={profileicon}/>
                    </button>
                    <ul classNameName="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" onClick={clickEdit} href="Editprofile">Edit Profile</a></li>
                        <li><a className="dropdown-item" href="/home">Log out</a></li>
                      
                    </ul>
                    </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
