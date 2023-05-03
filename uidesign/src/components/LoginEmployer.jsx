import React from 'react'
import logo from '../images/logosmall.png';
import { Header } from './Header';


export const LoginEmployer = () => {

  const clickLogin = ()=>{

  }
  return (
    <div>
    <Header/>
    <br /> <br />
    <section className='login-page pt-5'>
      <div className="container align-items-center">
            <div className="col-md-6 pt-5">
                <div className="card border-0 rounded-3 w-75 h-25 shadow mx-auto" style={{position : "relative"}}>
                    <div className="card-body p-0">
                        <div className="row no-gutters flex-column flex-sm-row">
                            <div className="col col-sm-4 d-flex align-items-center justify-content-sm-center pt-5 pl-5 pt-sm-0 pl-sm-0 border-end">
                                <img src={logo} alt="" className="img-fluid"/>
                            </div>
                            <div className="col col-sm-8">
                                <div className="p-4 d-grid gap-2">
                                    <h4>Employer Sign in</h4>
                                    <p className="mb-3">to access the portal</p>
                                    <form action="https://placements.ictkerala.com/company-verify" method="POST" enctype="multipart/form-data">
                                        {/* <input type="hidden" name="_token" value="FsQNRKX5A5OxZeeblXZMhpJyCeFYEocNCWXGugpw">                                        */}
                                        <div className="form-group p-2 ">
                                            <input type="text" className="form-control" placeholder="Email" name="email" value="" min="8"/>
                                        </div>
                                        <div className="form-group p-2">
                                            <input type="password" className="form-control" placeholder="Password" name="password" value=""/>
                                        </div>
                                        <div className="my-3">
                                            <a href="https://placements.ictkerala.com/forget-password-page" className="only-link text-primary hover" style={{textDecoration: "none"}}>Forgot Password?</a>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <a href="https://placements.ictkerala.com/company-registration" className="text-primary only-link" style={{textDecoration: "none"}}>Register Now</a>
                                            <button type="submit" className="btn btn-primary btn-hover" onClick={clickLogin}>Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
