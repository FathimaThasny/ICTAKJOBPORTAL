import axios from 'axios'
import React, { useState } from 'react'

export const AlumniRegister = () => {

    const apiUrl = "http://localhost:1000/api/alumniregister"
    const [input,setInput]=useState({})

    const [selectedCourse, setSelectedCourse] = useState('')
    const [selectedBatch, setSelectedBatch] = useState('')
    const [selectedPlacementStatus, setSelectedPlacementStatus] = useState('')


    const changeMyData=(event)=>{
        setInput({
            ...input,[event.target.name]:event.target.value
        })
    }
    const buttonClickEvent=()=>{
        console.log(input)
        axios.post(apiUrl, {...input, course: selectedCourse, batch: selectedBatch, placementStatus: selectedPlacementStatus}).then(
          (response)=>{
            console.log(response.data) 
            alert("Registered")
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

        <h1>Alumni Registration </h1>
        <div className="container">
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

          
      <div id='drop'>
            <label htmlFor="my-dropdown">Course studied at ICTAK : </label>
            <select name='course' id="my-dropdown" value={selectedCourse} onChange={handleCourseChange}>
                 <option value=""></option>
                 <option value="FSD" onClick={() => setSelectedCourse("FSD")}>FSD</option>
                 <option value="DSA" onClick={() => setSelectedCourse("DSA")}>DSA</option>
                 <option value="ML-AI" onClick={() => setSelectedCourse("ML-AI")}>ML-AI</option>
                 <option value="RPA" onClick={() => setSelectedCourse("RPA")}>RPA</option>
                 <option value="ST" onClick={() => setSelectedCourse("ST")}>ST</option>
                 <option value="CSA" onClick={() => setSelectedCourse("CSA")}>CSA</option>
            </select>
      <p>You selected: {selectedCourse}</p>
    </div>
    <div id='drop'>
            <label htmlFor="my-dropdown">Batch Details :</label>
            <select name='batch' id="my-dropdown" value={selectedBatch} onChange={handleBatchChange}>
                 <option value=""></option>
                 <option value="KKEM" onClick={() => setSelectedBatch("KKEM")}>KKEM</option>
                 <option value="NORKA" onClick={() => setSelectedBatch("NORKA")}>NORKA</option>
                 <option value="KDISC" onClick={() => setSelectedBatch("KDISC")}>KDISC</option>
            </select>
      <p>You selected: {selectedBatch}</p>
    </div>
    <div id='drop'>
            <label htmlFor="my-dropdown">Placement Status :</label>
            <select name='placementStatus' id="my-dropdown" value={selectedPlacementStatus} onChange={handlePlacementChange}>
                 <option value=""></option>
                 <option value="Placed" onClick={() => setSelectedPlacementStatus("Placed")}>Placed</option>
                 <option value="Job Seeking" onClick={() => setSelectedPlacementStatus("Job Seeking")}>Job Seeking</option>
            </select>
      <p>You selected: {selectedPlacementStatus}</p>
    </div>



          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Company_Name(if Placed) </label>
            <input name='CompanyName' type="text" className="form-control" onChange={changeMyData}/>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <button  className="btn btn-warning" onClick={buttonClickEvent}>REGISTER</button>

          </div>
          </div>
      </div>
    </div>
  )
}
