import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { IndividualJob } from './IndividualJob'

export const SearchHome = () => {

    const ApiUrl = "http://localhost:1000/api/searchjobfield"
  const [data,setData] =useState([])
  const navigate = useNavigate()
  const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))
  const [visible,setVisible] = useState(false)

  // const [field,setField] = useState('')


  useEffect(() => {
    // setField(localStorage.getItem("field"))
    const field = localStorage.getItem("field")
    console.log("in searchg page")
    console.log(field)
    const input ={
        "field" : field
    }
    axios.post(ApiUrl,input).then(
      (response)=>{
        console.log("inside axios")
        console.log(response)
        setData(response.data)
      }
    )
  }, []);

  const clickApply = ()=>{
    console.log(usertoken)
    let role = sessionStorage.getItem("role")
console.log(role)
    if((usertoken)&&(role === "alumni")){
      navigate("/alumniresponseform")
    }
    else{
      navigate("/alumnilogin")
    }
  }

  const searchJob = (postid)=>{
    console.log(postid)
    const jobid = postid
    console.log(jobid)
    localStorage.setItem("id",jobid)
    setVisible(true)
    // <IndividualJob/>
  }

  return (
    <div className='container mt-5 pt-5 '>
        <Header />
        <div className="row align-items-center justify-content-center d-flex m-5">
        <div className="bd-search col col-6 col-sm-6   d-flex">
          <input type="text" placeholder='Search' className="form-control " />
          <button className="btn bi bi-search btn-danger fright ms-3" ></button>
        </div>
        </div>
        
        <div className="row  d-flex flex-row justify-content-center position-relative ">
          <div className="col">
          
      <section className="row listContainer d-flex flex-column fleft ms-3 pt-3 ps-3">
        <div className="row list ms-5 ">
      {data.map(
          (user)=>{
            return <article className='col jobTuple bg-light border-0 rounded-5 shadow align-items-center m-3 p-3' key={user._id} style={{width:"100%", height:"50%"}} onClick={()=>searchJob(user._id)}>
              <div className="jobTupleHeader">
                <div className="info fleft ">
                  <h4 className="title ellipsis">{user.titleofrole}</h4>
                  <div className="companyInfo subheading">
                    <p className="subTitle ellipsis fleft">{user.company}</p>
                  </div>
                </div>
                <ul className='details p-0 m-0'>
                  <li className="fleft br2 placeHolderLi experience ">
                  <i className="bi bi-briefcase fleft pe-1"></i>
                  <span className="ellipsis fleft">{user.experience}</span>
                  <span className="seperator ms-2">|</span>
                  </li>
                  <li className="fleft br2 placeHolderLi salary px-2">
                  <i className="bi bi-currency-rupee fleft pe-1"></i>
                  <span className="ellipsis fleft">{user.salary}</span>
                  <span className="seperator transparent ms-2">|</span>
                  </li>
                  <li className="fleft br2 placeHolderLi place px-1">
                  <i className="bi bi-geo-alt fleft pe-1"></i>
                  <span className="ellipsis fleft">{user.place}</span>
                  </li>
                </ul>
                </div>
                <div className="ellipsis description fleft mb-2">
                <i className="bi bi-card-text pe-2"></i>
                {user.description}
                </div>
                <div className="jobFooter mt-2 py-3 mb-4">
                  <div className="fleft mt-2 pt-3">{user.createdAt}</div>
                  <button className='btn btn-primary fright mt-2 align-items-center' onClick={clickApply}>Apply</button>
                </div>
              
            </article>
        
          }
        )
      }

          </div>
          </section>
          <div className="ms-5 ps-5">
          {visible&&
          <section className='w-100 ms-5'>
<IndividualJob/>
          </section>}
          </div>
          </div>
          {/* <Footer /> */}
          </div>

</div>

  )
}
