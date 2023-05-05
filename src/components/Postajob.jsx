import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import Select from "react-select";
import { Headeremployer } from './Headeremployer'


export const Postajob = () => {

    const [input,setinput]=useState({})
    const navigate = useNavigate()

    const changeMyData=(e)=>{
      setinput({
         ...input,[e.target.name]:e.target.value
      })
    }
    const post=()=>{
      console.log("first")
      console.log(input)
        axios.post("http://localhost:1000/api/newjobpost",input)
        .then(response=>{
            console.log(input)
            alert("Job posted")
            navigate('/home')
        })
    }
    // const options = [
    //     { value: "React", label: "React" },
    //     { value: "Vue", label: "Vue" },
    //     { value: "Angular", label: "Angular" },
    //     { value: "HTML/CSS", label: "HTML/CSS" },
    //     { value: "Java", label: "Java" },
    //     { value: "C#", label: "C#" },
    //     { value: "C++", label: "C++" },
    //     { value: "NodeJS", label: "NodeJS" },
    //     { value: "MongoDB", label: "MongoDB" },
    //     { value: "Kotlin", label: "Kotlin" },
    //     { value: "Selenium", label: "Selenium" },
    //     { value: "Swift", label: "Swift" },
    //     { value: "PHP", label: "PHP" },
    //     { value: "Javascript", label: "Javascript" },
    //     { value: "Python", label: "Python" },
    //     { value: "TypeScript", label: "TypeScript" },
    //     { value: "Appium", label: "Appium" },
    //     { value: "Tricentis Tosca", label: "Tricentis Tosca" },
    //     { value: "Julia", label: "Julia" },
    //     { value: "Scala", label: "Scala" },
    //     { value: "Lisp", label: "Lisp" },
    //     { value: "Fortran", label: "Fortran" },
    //     { value: "Prolog", label: "Prolog" },
    //     { value: "Python", label: "Python" },
    //     { value: "Smalltalk", label: "Smalltalk" },
    //     { value: "MATLAB", label: "MATLAB" },
    //     { value: "Dart", label: "Dart" },
    //     { value: "MATLAB", label: "MATLAB" },
    //     { value: "C", label: "C" },
    //     { value: "SQL", label: "SQL" },
    //     { value: "SAS", label: "SAS" },

    //   ];
      
        // const [skills, setSkills] = useState([]);
      
        // const handleChange = (skills) => {
        //   setSkills(skills || []);
        // };
    
        return (

        <div>            
            <Headeremployer/>
        
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
                    <select className="form-control" >
                    <option class="dropdown-item" value="">Select..</option>
                        <option class="dropdown-item" value="Full-time">Full-time</option>
                        <option class="dropdown-item" value="Part-time">Part-time</option>
                        <option class="dropdown-item" value="Internship">Internship</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Skills</label>
                   
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
                    
                    
                    <input type="text" onChange={changeMyData} name="field" className="form-control" />
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
