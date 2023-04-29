import React from 'react'
import { HeaderAdmin } from './HeaderAdmin'

export const Adminhome = () => {
  return (
    <div>
      <HeaderAdmin/>
    <div className='container g-3 '>
      <div className="row">
        <div className="col-sm-3 mb-3 mb-sm-0">
    <div className="card" style={{width: "16em"}}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body" >
        <h5 className="card-title">Verify Employer</h5>
            <p className="card-text">List of Employers that are Registered to, and waiting for Confirmation</p>
            <a href="/pendingemployer" className="btn btn-primary">View List</a>
        </div>
    </div>
    </div>
    <div className="col-sm-3">
    <div className="card" style={{width: "16em"}}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
        <h5 className="card-title">Verify Candidate</h5>
            <p className="card-text">List of Alumnis that are Registered to, and waiting for Confirmation</p>
            <a href="/pendingalumni" className="btn btn-primary">View List</a>
        </div>
    </div>
    </div>
    <div className="col-sm-3">
    <div className="card" style={{width: "16em"}}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
        <h5 className="card-title">View All Candidate</h5>
            <p className="card-text">List of all Alumnis that are Registered to the site</p>
            <a href="/viewalumni" className="btn btn-primary">View List</a>
        </div>
    </div>
    </div>
    <div className="col-sm-3">
    <div className="card" style={{width: "16em"}}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
        <h5 className="card-title">View All Employers</h5>
            <p className="card-text">List of all Employers that are Registered to the site</p>
            <a href="/viewemployer" className="btn btn-primary">View List</a>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
