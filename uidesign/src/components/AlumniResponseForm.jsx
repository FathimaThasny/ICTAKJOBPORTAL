import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from './Header'
import { Footer } from './Footer'

export const AlumniResponseForm = () => {

  const apiUrl = "http://localhost:1000/api/alumniresponseform"
  const navigate = useNavigate()
    
  
  const [input,setInput]=useState({})
  const [pdfFile, setPdfFile] = useState(null);

  const changeMyData=(event)=>{
      setInput({
          ...input,[event.target.name]:event.target.value
      })
  }  
  const buttonClickEvent = () => {
    const formData = new FormData();
    formData.append('name', input.name);
    // formData.append('last_name', input.last_name);
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
      window.location.replace('/')
    }).catch((error) => {
      console.error(error);
      alert('An error occurred while submitting the form');
    });
  };
  // const styles = {
  
  //   width : '1000px',
  //   padding : '0px 0px 0px 300px'
  // };
  // const hstyles = {
  

  //   padding : '100px 0px 0px 0px'
  // };

  
  return (
    <div>
      <Header/>
        {/* <h1 style={hstyles}>Alumni Response Form</h1> */}
        
      <div className='container justify-content-center' >
        <div className="row justify-content-center ">
        <form className="form justify-content-center m-5 p-5">
   
    <div class=" mb-3">
      <label class="form-label ">Name</label>
      <input name='name' type="text" aria-label="Name" class="form-control" onChange={changeMyData}/>
      {/* <input name='last_name' type="text" aria-label="Last name" class="form-control" onChange={changeMyData}/> */}
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
<div className='d-flex'>
      <p>Please Upload your Resume  : </p><input className='ms-3' type="file" onChange={(e) => setPdfFile(e.target.files[0])} accept="application/pdf" />
    
  </div>


{/* 
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Additional Data</label>
  <textarea name='skill' class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={changeMyData}></textarea>
</div> */}
<button type="submit" class="btn btn-primary mt-4" onClick={buttonClickEvent}>Submit</button>
<button className='btn btn-primary mt-4 ms-5'> <a className='text-light text-decoration-none' href="/">Cancel</a></button>

</form> 
</div>

    </div>
<Footer/>
</div>
  )
}

