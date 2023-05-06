import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Header } from './Header'


export const AlumniPasswordUpdate = () => {
    const apiUrl = "http://localhost:1000/api/alumniupdatepassword"
    const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))
    const [input,setInput] = useState({})
    const [userid,setuserid] = useState(sessionStorage.getItem("userId"))
    const navigate = useNavigate()

    const changeMyData = (event) => {

      setInput({
          ...input,[event.target.name]:event.target.value
      })
      
  }

  const clickUpdate = ()=>{

    console.log(input)
    if(input.password!== input.confirmpassword){
      alert("passwords do not match")
    }
    else{

      let data = {
        "userId" : userid,
        "password" : input.password,
        "token": usertoken
      }
      axios.post(apiUrl,data)
      .then(res =>{
        console.log(res)
        alert(`${res.data.status}`)
        navigate("/")
      })

    }
  }
  return (
    <div>
      <Header/>
        <h1>AlumniPasswordUpdate</h1>


<div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
      
     <div className="form-control mb-3">
       <label for="exampleInputEmail1" className="form-label">New Password</label>
       <input type="password" className="form-control" name='password' onChange={changeMyData}/>
   
     </div>
  <div className="form-control mb-3">
    <label for="exampleInputEmail1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name='confirmpassword' onChange={changeMyData}/>
    
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={clickUpdate}>Submit</button>
</div>



    </div>
  )
}

