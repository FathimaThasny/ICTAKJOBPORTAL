import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const AlumniProfile = () => {

    const apiUrl = "http://localhost:1000/api/selectAlumni"
    const[data, setData]=useState([])
   
   
    useEffect(() => {
        axios.post(apiUrl) 
          .then((response) => {
            setData(response.data);
            console.log(response.data);
          })
          .catch(error => console.error(error));
      }, []);


  return (
    <div>
        <h1>YOUR PROFILE</h1>
        <label htmlFor="" className="form-label">NAME : </label><br />
        <label htmlFor="" className="form-label">EMAIL : </label><br />
        <label htmlFor="" className="form-label">Phone_No : </label><br />
        <label htmlFor="" className="form-label">Highest_Qualification: </label><br />
        <label htmlFor="" className="form-label">Course studied at ICTAK : </label><br />
        <label htmlFor="" className="form-label">Batch Details : </label><br />
        <label htmlFor="" className="form-label">Placement Status : </label><br />
        <label htmlFor="" className="form-label">Company_Name(if Placed) : </label><br />
    </div>
  )
}
