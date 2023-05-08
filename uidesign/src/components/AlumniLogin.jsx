import React, { useState } from 'react'
import { Header } from './Header'
import axios from 'axios'
import logo from '../images/logosmall.png';
import { useNavigate } from 'react-router-dom';

export const AlumniLogin = () => {
    const apiUrl = "http://localhost:1000/api/alumnilogin";

    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
  
    const navigate = useNavigate();
  
    const changeData = (event) => {
      setInput({
        ...input,
        [event.target.name]: event.target.value
      });
    };
  
    const validateEmail = (email) => {
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validatePassword = (password) => {
   
      return password.length >= 1;
  
      
    };
  
    const clickLogin = () => {
      const { email, password } = input;
      const errors = {};
  
      // Perform email validation
      if (!validateEmail(email)) {
        errors.email = 'Invalid email format';
      }
  
      // Perform password validation
      if (!validatePassword(password)) {
        errors.password = 'Password field empty';
      }
  
      if (Object.keys(errors).length > 0) {
        // Set the validation errors
        setErrors(errors);
      } else {
        // Clear previous errors
        setErrors({});
  
        axios.post(apiUrl, input)
          .then(response => {
            console.log(response);
            if (response.data.msg === "login successful") {
              const token = response.data.token;
              console.log(response.data.data);
              const userId = response.data.data._id;
              let role = "alumni";
  
              console.log(role);
  
              sessionStorage.setItem("userToken", token);
              sessionStorage.setItem("userId", userId);
              sessionStorage.setItem("role", role);
              console.log("alumni");
              navigate("/");
        
            } else {
              alert("Invalid Credentials");
              console.log("invalid")
            }
  
          });
      }
    };
  
    return (
      <div>
        <Header />
        <br /> <br />
        <div className="container my-0 justify-content-center" style={{marginLeft: "25em"}}>
        <section className='login-page pt-5'>
          <div className="container align-items-center">
            <div className="col-md-6 pt-5">
              <div className="card border-0 rounded-3 w-75 h-25 shadow mx-auto" style={{ position: "relative" }}>
                <div className="card-body p-0">
                  <div className="row no-gutters flex-column flex-sm-row">
                    <div className="col col-sm-4 d-flex align-items-center justify-content-sm-center pt-5 pl-5 pt-sm-0 pl-sm-0 border-end">
                      <img src={logo} alt="" className="img-fluid" />
                    </div>
                    <div className="col col-sm-8">
                      <div className="p-4 d-grid gap-2">
                        <h4>Candidate SignIn</h4>
                        <p className="mb-3">to access the portal</p>
                        <div className='datafields'>
                        <div className="form-group p-2">
                           <input
                             type="text"
                             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                             placeholder="Email"
                             name="email"
                             onChange={changeData}
                           />
                           {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                         </div>
                         <div className="form-group p-2">
                           <input
                             type="password"
                             className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                             placeholder="Password"
                             name="password"
                             onChange={changeData}
                           />
                           {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                         </div>
  
                          <div className="my-3">
                            <a href="/" className="only-link text-primary hover" style={{ textDecoration: "none" }}>Forgot Password?</a>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="/alumniregister" className="text-primary only-link" style={{ textDecoration: "none" }}>Register Now</a>
                            <button type="submit" className="btn btn-primary btn-hover" onClick={clickLogin}>Sign in</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    );
  };
