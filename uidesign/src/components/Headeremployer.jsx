import React from 'react'
import profileicon from './img/profileicon.png'
import DropdownItem from './DropdownItem'
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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home">ICT Accademy</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/postnewjob">Post a Job</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/employsignup">Employer Register</a>
                        </li>
                        <li>
                                            <div class="w3-right">
                              
                    <button  type="button" id="profilebtn" data-bs-toggle="dropdown" aria-expanded="false">
                        <img type="button" id="profile"src={profileicon}/>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" onClick={clickEdit} href="Editprofile">Edit Profile</a></li>
                        <li><a className="dropdown-item" href="#">Log out</a></li>
                      
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
