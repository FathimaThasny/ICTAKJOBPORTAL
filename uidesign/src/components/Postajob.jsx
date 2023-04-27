import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Header } from './Header'

export const Postajob = () => {

    const [input,setinput]=useState({})
    const navigate = useNavigate()

    const changeMyData=(e)=>{
      setinput({
         ...input,[e.target.name]:e.target.value
      })
    }
    const post=()=>{
      console.log("first")
      console.log(input)
        axios.post("http://localhost:1000/api/newjobpost",input)
        .then(response=>{
            console.log(input)
            alert("Job posted")
            navigate('/home')
        })
    }

  return (

        <div>            
            <Header/>
        
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3">
                    <label className="form-label">Job Position</label>
                    <input type="text" onChange={changeMyData} name="titleofrole"className="form-control" required />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Company Name</label>
                    <input type="text" onChange={changeMyData} name="company" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Location</label>
                    <input type="text" onChange={changeMyData} name="place" className="form-control" />
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Job Type</button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button">Full-time</button></li>
                        <li><button class="dropdown-item" type="button">Part-time</button></li>
                        <li><button class="dropdown-item" type="button">Internship</button></li>
                    </ul>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Field</label>
                    <input type="text" onChange={changeMyData} name="field" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Company Email</label>
                    <input type="text" onChange={changeMyData} name="email" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Experience</label>
                    <input type="text" onChange={changeMyData} name="experience" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Salary Package</label>
                    <input type="text" onChange={changeMyData} name="salary" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Job Description</label>
                    <input type="text" onChange={changeMyData} name="description" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  className="btn btn-success" onClick={post}>Submit</button>
                </div>
            </div>
        </div>
        </div>

  )
}
