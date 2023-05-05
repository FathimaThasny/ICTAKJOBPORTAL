import React, { useState } from 'react'
import axios from 'axios'


export const AlumniPasswordUpdate = () => {
    const apiUrl = "http://localhost:1000/api/alumniupdatepassword"
    const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))
    const [input,setInput] = useState({})
    const [userid,setuserid] = useState(sessionStorage.getItem("userId"))

    const changeMyData = (event) => {

      setInput({
          ...input,[event.target.name]:event.target.value
      })
      if(input.password!== input.confirmpassword){
        alert("passwords do not match")
      }
  }

  const clickUpdate = ()=>{

    console.log(input)
    if(input.password!== input.confirmpassword){
      alert("passwords do not match")
    }
    else{

      let data = {
        "userId" : userid
      }
      axios.post(apiUrl,data)
      .then(res =>{
        console.log(res)
        alert(`${res.data.status}`)
      })

    }
  }
  return (
    <div>
        <h1>AlumniPasswordUpdate</h1>


<form>
      
     <div className="form-control mb-3">
       <label for="exampleInputEmail1" className="form-label">New Password</label>
       <input type="password" className="form-control" name='password' onChange={changeMyData}/>
   
     </div>
  <div className="form-control mb-3">
    <label for="exampleInputEmail1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name='confirmpassword' onChange={changeMyData}/>
    
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={clickUpdate}>Submit</button>
</form>



    </div>
  )
}

