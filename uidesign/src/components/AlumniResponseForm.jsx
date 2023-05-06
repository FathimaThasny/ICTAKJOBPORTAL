import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from './Header'
import { Footer } from './Footer'

export const AlumniResponseForm = () => {

  const apiUrl = "http://localhost:1000/api/alumniresponseform"
    
  
  const [input,setInput]=useState({})
  const [pdfFile, setPdfFile] = useState(null);

  const changeMyData=(event)=>{
      setInput({
          ...input,[event.target.name]:event.target.value
      })
  }  
  const buttonClickEvent = () => {
    const formData = new FormData();
    formData.append('first_name', input.first_name);
    formData.append('last_name', input.last_name);
    formData.append('email', input.email);
    formData.append('phone', input.phone);
    formData.append('course', input.course);
    formData.append('skill', input.skill);
    formData.append('pdfFile',pdfFile);
  
    axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => {
      console.log(response.data);
      alert('Form submitted successfully');
    }).catch((error) => {
      console.error(error);
      alert('An error occurred while submitting the form');
    });
  };
  const styles = {
  
    width : '1000px',
    padding : '0px 0px 0px 300px'
  };
  const hstyles = {
  

    padding : '100px 0px 0px 0px'
  };

  
  return (
    <div>
      <Header/>
        <h1 style={hstyles}>Alumni Response Form</h1>
        
      <div style={styles}>
   <form action="">    
   
    <div class="input-group mb-3">
      <span class="input-group-text">First and last name</span>
      <input name='first_name' type="text" aria-label="First name" class="form-control" onChange={changeMyData}/>
      <input name='last_name' type="text" aria-label="Last name" class="form-control" onChange={changeMyData}/>
    </div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email_id</label>
  <input name='email' type="email" class="form-control" id="exampleFormControlInput1" placeholder="eg : ab@gmail.com" onChange={changeMyData}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Phone No</label>
  <input name='phone' type="text" class="form-control" id="formGroupExampleInput" placeholder="eg : 7654893614" onChange={changeMyData}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Course</label>
  <input name='course' type="text" class="form-control" id="formGroupExampleInput2" onChange={changeMyData}/>
</div>


<div class="mb-3"> 
  <label for="exampleFormControlTextarea1" class="form-label">SKILLS</label>
  <textarea name='skill' class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={changeMyData}></textarea>
</div>
<div>
      <p>Please Upload your Resume</p><input  type="file" onChange={(e) => setPdfFile(e.target.files[0])} accept="application/pdf" />
    
  </div>



<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">SKILLS</label>
  <textarea name='skill' class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={changeMyData}></textarea>
</div>
<button type="submit" class="btn btn-primary" onClick={buttonClickEvent}>Submit</button>
</form> 


    </div>
<Footer/>
</div>
  )
}

