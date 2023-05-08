import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'


export const Postajob = () => {

    const [input,setinput]=useState({})
    const [userid,setuserid] = useState(sessionStorage.getItem("userId"))
    const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))

    const navigate = useNavigate()

    const changeMyData=(e)=>{
      setinput({
         ...input,[e.target.name]:e.target.value,
         "userId": userid,
        "token": usertoken
      })
    }
    const post=()=>{
      console.log("first")
      console.log(input)
        axios.post("http://localhost:1000/api/newjobpost",input)
        .then(response=>{
            console.log(input)
            alert("Job posted")
            navigate('/')
        })
    }
    // const options = [
    //     { value: "React", label: "React" },
    //     { value: "Vue", label: "Vue" },
    //     { value: "Angular", label: "Angular" },
    //     { value: "Java", label: "Java" }
    //   ];
      
    //     const [skills, setSkills] = useState([]);
      
    //     const handleChange = (skills) => {
    //       setSkills(skills || []);
    //     };
    
        return (

        <div>            
            <Header/>
        
        <div className="container">
        <form className="form p-5">
        <div className="row g-3">
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3">
                    <label className="form-label">Job Position</label>
                    <input type="text" onChange={changeMyData} name="titleofrole"className="form-control" required />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Company Name</label>
                    <input type="text" onChange={changeMyData} name="company" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Location</label>
                    <input type="text" onChange={changeMyData} name="place" className="form-control" />
                </div>
                <div className="dropdown col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Job Type</label>
                    <select className="form-control" onChange={changeMyData} name='jobtype'>
                    <option class="dropdown-item text-dark" >Select..</option>
                        <option className="dropdown-item text-dark" value="Full-time">Full-time</option>
                        <option className="dropdown-item text-dark" value="Part-time">Part-time</option>
                        <option className="dropdown-item text-dark " value="Internship">Internship</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Field</label>
                   
                    {/* <form >
                        <Select
                        options={options}
                        onChange={handleChange}
                        value={skills}
                        isMulti
                        styles={{
                            control: (provided) => ({
                              ...provided,
                              width: '100%' // adjust the width here as needed
                            })
                          }}
                        />
                    </form> */}
                    <select className="form-control text-dark" onChange={changeMyData} name='field'>
                    <option class="dropdown-item text-dark" >Select..</option>
                        <option className="dropdown-item text-dark" value="IT">IT Jobs</option>
                        <option className="dropdown-item text-dark" value="ML&AI">Machine Learning & Robotics</option>
                        <option className="dropdown-item text-dark" value="Designer">Designer Jobs</option>
                        <option className="dropdown-item text-dark" value="Business Administration">Business Administration</option>
                        <option className="dropdown-item text-dark" value="Marketing">Marketing</option>
                        <option className="dropdown-item text-dark" value="others">Others</option>
                    </select>
                    
                    {/* <input type="text" onChange={changeMyData} name="field" className="form-control" /> */}
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Company Email</label>
                    <input type="text" onChange={changeMyData} name="email" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Experience</label>
                    <input type="text" onChange={changeMyData} name="experience" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Salary Package</label>
                    <input type="text" onChange={changeMyData} name="salary" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Job Description</label>
                    <textarea  onChange={changeMyData} name="description" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  className="btn btn-success" onClick={post}>Submit</button>
                </div>
            </div>
                    </form>
            

        </div>
        <Footer />
        </div>

  )
}
