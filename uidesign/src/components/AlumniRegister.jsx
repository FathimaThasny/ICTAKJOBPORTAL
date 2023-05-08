import axios from 'axios'
import React, { useState } from 'react'
import { Header } from './Header'
import { useNavigate } from 'react-router-dom'

export const AlumniRegister = () => {

    const apiUrl = "http://localhost:1000/api/alumniregister"
    const [input,setInput]=useState({})
    const navigate = useNavigate()

    const [selectedCourse, setSelectedCourse] = useState('')
    const [selectedBatch, setSelectedBatch] = useState('')
    const [selectedPlacementStatus, setSelectedPlacementStatus] = useState('')


    const changeMyData=(event)=>{
        setInput({
            ...input,[event.target.name]:event.target.value
        })
    }
    const buttonClickEvent=()=>{
        // console.log(input)
        axios.post(apiUrl, {...input, course: selectedCourse, batch: selectedBatch, placementStatus: selectedPlacementStatus}).then(
          (response)=>{
            console.log(response.data) 
            alert(response.data.msg)
            navigate('/alumnilogin')
          }
        )
      }
      

      const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value); 
      };
      const handleBatchChange = (event) => {
        setSelectedBatch(event.target.value); 
      };
      const handlePlacementChange = (event) => {
        setSelectedPlacementStatus(event.target.value); 
      };
      
  return (
<div >
<Header/>
        {/* <h1>Alumni Registration </h1> */}
        <div className="container d-flex">
        <form className="form justify-content-center m-5 p-5">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Candidate Name</label>
            <input name='name' type="text" className="form-control" onChange={changeMyData}/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label">Email_Id</label>
            <input name='email' type="email" className="form-control" onChange={changeMyData}/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="" className="form-label">Phone_No</label>
            <input name='phone' type="number" className="form-control" onChange={changeMyData}/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Highest_Qualification</label>
            <input name='highestQualification' type="text" className="form-control" onChange={changeMyData}/>
          </div>

          
      <div id='drop' className='dropdown col col-12 col-sm-12 mt-3'>
            <label htmlFor="my-dropdown">Course studied at ICTAK : </label>
            <select name='course' id="my-dropdown" className='dropdown-toggle  col col-12 col-sm-12' value={selectedCourse} onChange={handleCourseChange}>
                 <option value=""></option>
                 <option className='dropdown-item text-dark' value="FSD" onClick={() => setSelectedCourse("FSD")}>FSD</option>
                 <option className='dropdown-item text-dark' value="DSA" onClick={() => setSelectedCourse("DSA")}>DSA</option>
                 <option className='dropdown-item text-dark' value="ML-AI" onClick={() => setSelectedCourse("ML-AI")}>ML-AI</option>
                 <option className='dropdown-item text-dark' value="RPA" onClick={() => setSelectedCourse("RPA")}>RPA</option>
                 <option className='dropdown-item text-dark' value="ST" onClick={() => setSelectedCourse("ST")}>ST</option>
                 <option className='dropdown-item text-dark' value="CSA" onClick={() => setSelectedCourse("CSA")}>CSA</option>
            </select>
      <p>You selected: {selectedCourse}</p>
    </div>
    {/* <div className="d-flex flex-row"> */}
    <div id='drop' className='dropdown col col-12 col-sm-12 '>
            <label htmlFor="my-dropdown">Batch Details :</label>
            <select name='batch' id="my-dropdown" className='dropdown-toggle  col col-12 col-sm-12' value={selectedBatch} onChange={handleBatchChange}>
                 <option value=""></option>
                 <option className='dropdown-item text-dark' value="KKEM" onClick={() => setSelectedBatch("KKEM")}>KKEM</option>
                 <option className='dropdown-item text-dark' value="NORKA" onClick={() => setSelectedBatch("NORKA")}>NORKA</option>
                 <option className='dropdown-item text-dark' value="KDISC" onClick={() => setSelectedBatch("KDISC")}>KDISC</option>
            </select>
      <p>You selected: {selectedBatch}</p>
    </div>
    <div id='drop' className='dropdown flex-left col col-12 col-sm-12 '>
            <label htmlFor="my-dropdown">Placement Status :</label>
            <select name='placementStatus' id="my-dropdown" className='dropdown-toggle  col col-12 col-sm-12' value={selectedPlacementStatus} onChange={handlePlacementChange}>
                 <option value=""></option>
                 <option value="Placed" onClick={() => setSelectedPlacementStatus("Placed")}>Placed</option>
                 <option value="Job Seeking" onClick={() => setSelectedPlacementStatus("Job Seeking")}>Job Seeking</option>
            </select>
      <p>You selected: {selectedPlacementStatus}</p>
    </div>
    {/* </div> */}


          {/* <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Company_Name(if Placed) </label>
            <input name='CompanyName' type="text" className="form-control" onChange={changeMyData}/>
          </div> */}
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-5">

            <button  className="btn btn-warning" onClick={buttonClickEvent}>REGISTER</button>

          </div>
          </div>
          </form>
      </div>
    </div>
  )
}
