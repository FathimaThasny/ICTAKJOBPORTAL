import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const AlumniProfile = () => {

    const apiUrl = "http://localhost:1000/api/selectAlumni"
    const[data, setData]=useState([])
    const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))
    const [userid,setuserid] = useState(sessionStorage.getItem("userId"))

   
    useEffect(() => {
      let data ={
        "userId" : userid,
       "token" : usertoken
      }
        axios.post(apiUrl,data) 
          .then((response) => {
            setData(response.data);
            // console.log(response.data);
          })
          .catch(error => console.error(error));
      }, []);


  return (
    <div>
      <div class="mb-3">
      <h1>YOUR PROFILE</h1>
      {data.map(
        (user)=>{
          return<ul class="list-group">
          <li class="list-group-item">NAME : {user.name} </li>
          <li class="list-group-item">EMAIL : {user.email}</li>
          <li class="list-group-item">Phone_No : {user.phone}</li>
          <li class="list-group-item">Highest_Qualification: {user.highestQualification}</li>
          <li class="list-group-item">Course studied at ICTAK : {user.course}</li>
          <li class="list-group-item">Batch Details : {user.batch}</li>
          <li class="list-group-item">Placement Status : {user.placementStatus}</li>
          <li class="list-group-item">Company_Name(if Placed) : {user.CompanyName}</li>
 
          </ul>
        }
          


      )}
      
      </div>

      <div class="mb-3">
        <button type="button" class="btn btn-success">Edit Your Profile</button>
      </div>
    </div>
  )
}
