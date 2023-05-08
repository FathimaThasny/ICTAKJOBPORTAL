import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Header } from './Header';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';
import { IndividualJob } from './IndividualJob';

export const Home = () => {
    const ApiUrl = "http://localhost:1000/api/viewalljobs"
  const [data,setData] =useState([])
  const [item,setItem] =useState({})

  const navigate = useNavigate()
  const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))
  const [visible,setVisible] = useState(false)
  const apiUrl ="http://localhost:1000/api/viewsinglejob"


  useEffect(() => {
    axios.post(ApiUrl).then(
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

  const clickFilter = (event)=>{
    console.log(event.target.value)
    const field = event.target.value
    console.log("field")
    console.log(field)
    localStorage.setItem("field",field)
    navigate('/homesearch')
  }
  const searchJob = (postid)=>{
    console.log(postid)
    const jobid = postid
    console.log("jobid")
    const input = {
      "_id" : jobid
  }
  console.log(input)

  axios.post(apiUrl,input)
  .then((response)=>{
      console.log("inside search")
      console.log(response.data)
      const item= new Array(response.data)
      // setItem(response.data)
      console.log("item")
      console.log(item)
      // window.location.replace(data)

  })

    // localStorage.setItem("id",jobid)
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
        <div className="row justify-content-center position-relative">
        <section className="top-ind mb-3 col col-9 col-sm-9 col-md- col-lg-9 position-relative">
	<h2>Browse Jobs</h2>
<ul className="clearfix ms-5  align-items-center flex-column flex-2 justify-content-center" >
    <button className="top-ind-it shadow border-inherit w-25 h-25 bg-white fleft p-3 mx-3 mb-3" value="IT" onClick={clickFilter} >
    Information Technology
    </button >
    <button className="top-ind-manu shadow border-inherit w-25 h-25 bg-white fleft p-3 mx-3 mb-3" value="Designer" onClick={clickFilter}>
   Designer Jobs 
    </button>
    <button className="top-ind-bank shadow border-inherit bg-white w-25 h-25 fleft p-3 mx-3 mb-3" value="ML&AI" onClick={clickFilter}>
    Machime Learning &amp; AI 
    </button>
    <button className="top-ind-bpo shadow border-inherit bg-white w-25 h-25 p-3 mx-3 fleft mb-3" value="Business Administration" onClick={clickFilter}>
    Business Administration
     </button>
    <button className="top-ind-mark shadow border-inherit bg-white w-25 p-3 h-25 fleft mx-3 mb-3" value="Marketing" onClick={clickFilter}>
    Sales &amp; Marketing Jobs 
    </button>
    <button className="top-ind-divers shadow border-inherit bg-white w-25 fleft h-25 p-3 mx-3 mb-3">
      <a href="/" style={{textDecoration: "none"}}>
      <span className="top-ind-icon"></span>
    All Jobs <br /> 
    </a>
    </button> 
    </ul>
        </section>
        </div>
        <div className="row  d-flex flex-row  position-relative ">
          <div className="col-6 fleft">
          
      <section className="row listContainer d-flex flex-column fleft ms-3 pt-3 ps-3">
        <div className="row list ms-5 ">
      {data.map(
          (user)=>{
            return <article className='col jobTuple bg-light border-0 rounded-5 shadow align-items-center m-3 p-3' key={user._id} style={{width:"100%", height:"250px"}} onClick={()=>searchJob(user._id)}>
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
                <div className="jobFooter col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 flex-row mt-2 py-3 mb-4">
                  <div className="d-flex flex-row fleft mt-2 pt-3">{user.createdAt}</div>
                  <button className='btn btn-primary fright mt-2 align-items-center' onClick={clickApply}>Apply</button>
                </div>
              
            </article>
        
          }
        )
      }

          </div>
          <div className="vr h-100"></div>
          </section>{visible&&
          <section className="row listContainer d-flex flex-column fleft ms-3   ps-3" >
          <div className="row list ms-5 ">
          <article className='col jobTuple border-0 bg-light m-3 p-3' key={item._id} style={{height : "auto",borderRadius:"7px"}}>
              <article className="jobhead bg-light border-0 rounded-5 shadow m-0 p-3 w-100 sticky" style={{height:"190px"}}>
                <div className="jobTupleHeader d-flex flex-column">
                  <div className="info fleft ">
                    <h4 className="title ellipsis fleft">{item.titleofrole}</h4>
                    <div className="companyInfo subheading mt-5">
                      <p className="subTitle ellipsis fleft mb-0"><b>{item.company}</b></p> <br />
                      <p className="ellipsis fleft mt-2 mb-0">{item.place}</p>
  
                    </div>
                    <div className="jobFooter mt-3 py-3 mb-2">
                    {/* <div className="fleft mt-2 pt-3">{data.createdAt}</div> */}
                    <button className='btn btn-primary fleft mt-3 align-items-center' onClick={clickApply}>Apply</button>
                  </div>
                  </div>
                  </div>
                  </article>
                  
                  <hr />
              <section className="jobhead   d-flex  flex-column d-block p-3 w-100 h-50" >
                  <h5 className='fleft'>Job Details</h5>
                  <div className="ellipsis description d-flex fleft mt-2 mb-2">
                  <i className="bi bi-briefcase pe-2"></i><b>
                  Job Type  :</b> 
                  <br />
                  <div className="ms-3 fleft d-flex">
                  <div className="border-0  fleft">{item.jobtype}</div>
                  </div>
                  </div>
                  <div className="ellipsis description d-flex fleft mt-2 mb-2">
                  <i className="bi bi-briefcase pe-2"></i><b>
                  Experience  :</b> 
                  <br />
                  <div className="ms-3 fleft d-flex">
                  <div className="border-0  fleft">{item.experience}</div>
                  </div>
                  </div>
                  <hr />
                  <div className="ellipsis description d-flex fleft mt-2 mb-2">
                  <i className="bi bi-card-text pe-2"></i>
                  {item.description}
                  </div>
                  <div className="ellipsis description d-flex fleft mt-2 mb-2">
                  <i className="bi bi-currency-rupee pe-2"></i><b>
                  salary  :</b> 
                  <br />
                  <div className="ms-3 fleft d-flex">
                  <div className="border-0  fleft">{item.salary}</div>
                  </div>
                  </div>
                  
                  </section>
                  
                
              </article>
            
            </div>
            </section>
//           <section>
// <IndividualJob/>
//           </section>
}
          </div>
          {/* <Footer /> */}
          </div>

</div>

  )
}

