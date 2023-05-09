import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const IndividualJob = () => {
    const navigate = useNavigate()

    const [postid,setPostid] = useState('')
    const [data,setData] =useState([])

    const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))

    const apiUrl ="http://localhost:1000/api/viewsinglejob"

    useEffect(()=>{

        // setPostid(localStorage.getItem("id"))
        const postid = localStorage.getItem("id")
        console.log("postid")
        console.log(postid)
        const input = {
            "_id" : postid
        }
        console.log(input)

        axios.post(apiUrl,input)
        .then((response)=>{
            console.log("inside search")
            console.log(response.data)
            setData(response.data)
            // window.location.replace(data)

        })

    },[]
    )

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


  return (
    <div className='row ps-0 mt-3' style={{width:"100em"}}>
          <section className="row listContainer d-flex flex-column fleft " >
        <div className="row list ms-5 mt-3 ">
        <article className='col jobTuple border-0 shadow bg-light p-2' key={data._id} style={{height : "auto",width:"63vh",borderRadius:"7px"}}>
            <article className="jobhead bg-white border-0 rounded-5  m-0 p-3 w-100 sticky" style={{height:"190px"}}>
              <div className="jobTupleHeader d-flex flex-column">
                <div className="info fleft ">
                  <h4 className="title ellipsis fleft">{data.titleofrole}</h4>
                  <div className="companyInfo subheading mt-5">
                    <p className="subTitle ellipsis fleft mb-0"><b>{data.company}</b></p> <br />
                    <p className="ellipsis fleft mt-2 mb-0">{data.place}</p>

                  </div>
                  <div className="jobFooter mt-3 py-3 mb-2">
                  {/* <div className="fleft mt-2 pt-3">{data.createdAt}</div> */}
                  <button className='btn btn-primary fleft mt-3 align-items-center' onClick={clickApply}>Apply</button>
                </div>
                </div>
                </div>
                </article>
                
                <hr />
            <section className="jobhead bg-white  d-flex  flex-column d-block p-3 w-100 h-50" >
                <h5 className='fleft'>Job Details</h5>
                <div className="ellipsis description d-flex fleft mt-2 mb-2">
                <i className="bi bi-briefcase pe-2"></i><b>
                Job Type  :</b> 
                <br />
                <div className="ms-3 fleft d-flex">
                <div className="border-0  fleft">{data.jobtype}</div>
                </div>
                </div>
                <div className="ellipsis description d-flex fleft mt-2 mb-2">
                <i className="bi bi-briefcase pe-2"></i><b>
                Experience  :</b> 
                <br />
                <div className="ms-3 fleft d-flex">
                <div className="border-0  fleft">{data.experience}</div>
                </div>
                </div>
                <hr />
                <div className="ellipsis description d-flex fleft mt-2 mb-2">
                <i className="bi bi-card-text pe-2"></i>
                {data.description}
                </div>
                <div className="ellipsis description d-flex fleft mt-2 mb-2">
                <i className="bi bi-currency-rupee pe-2"></i><b>
                salary  :</b> 
                <br />
                <div className="ms-3 fleft d-flex">
                <div className="border-0  fleft">{data.salary}</div>
                </div>
                </div>
                
                </section>
                {/* <div className="jobFooter mt-2 py-3 mb-4">
                  <div className="fleft mt-2 pt-3">{data.createdAt}</div>
                  <button className='btn btn-primary fright mt-2 align-items-center' onClick={clickApply}>Apply</button>
                </div> */}
              
            </article>
          {/* })
          } */}
          </div>
          </section>

    </div>
  )
}
