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
       
        <ul class="list-group">
          <li class="list-group-item">NAME : </li>
          <li class="list-group-item">EMAIL :</li>
          <li class="list-group-item">Phone_No :</li>
          <li class="list-group-item">Highest_Qualification: </li>
          <li class="list-group-item">Course studied at ICTAK :</li>
          <li class="list-group-item">Batch Details :</li>
          <li class="list-group-item">Placement Status :</li>
          <li class="list-group-item">Company_Name(if Placed) :</li>

       </ul>
    </div>
  )
}
