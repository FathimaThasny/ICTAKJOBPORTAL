import React from 'react'

export const AlumniPasswordUpdate = () => {
    const apiUrl = "http://localhost:1000/api/alumniupdatepassword"
  return (
    <div>
        <h1>AlumniPasswordUpdate</h1>


<form>
      
     <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">New Password</label>
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
     </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>



    </div>
  )
}

