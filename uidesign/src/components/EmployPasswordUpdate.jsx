import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Headeremployer } from './Headeremployer'
import { Header } from './Header'

export const EmployPasswordUpdate = () => {
    const apiUrl = "http://localhost:1000/api/employupdatepassword"
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
        navigate("/postnewjob")
      })

    }
  }
  return (
    <div>
        <Header/>
    <div className='container'>
        <div className='row g-5 align-items-center justify-content-sm-center'>
            <div className="card border-0 rounded-3" style={{width:"100%",height:"15em"}}>
        <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 g-5 mt-4'>
      
        <label  className="form-label">New Password</label>
        <input type="password" className="form-control" name='password' onChange={changeMyData}/>
    
     <label  className="form-label">Confirm Password</label>
     <input type="password" className="form-control" name='confirmpassword' onChange={changeMyData}/>
     
  
   <button type="submit" className="btn btn-primary mt-3" onClick={clickUpdate}>Submit</button>
 </div>
 </div>
        </div>
        </div>

    </div>
  )
}
