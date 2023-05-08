import React, {useState, useEffect} from 'react';
import{ Header} from './Header';
import axios from 'axios';
import { LoginEmployer } from './LoginEmployer';
// import TimeAgo from 'javascript-time-ago'
// import ReactTimeAgo from 'react-time-ago'
// import en from 'javascript-time-ago/locale/en.json'
import { useNavigate } from 'react-router-dom';
// TimeAgo.addDefaultLocale(en)

export const Postedjobs = (props) => {
  let role = sessionStorage.getItem("role")
    const deleteApi = "http://localhost:1000/api/deletejob"
  const [data,setData] =useState([])
  const navigate = useNavigate()
  const [usertoken,settoken] = useState(sessionStorage.getItem("userToken"))
  const apiURL2="http://localhost:1000/api/employersjobs"


  useEffect(() => {
    let role = sessionStorage.getItem("role")
    console.log(role)
    if(role==="employer"){
      axios.post(apiURL2,props.personalmail).then(
        (response)=>{
          console.log("inside axios")
          console.log(response)
          setData(response.data)
        }
      )

    }
    else if(role==="admin"){
        axios.post(apiURL2,props.mail).then(
            (response)=>{
              console.log("inside axios")
              console.log(response)
              setData(response.data)
            }
          )
     
    }
  }, []);
  const deleteData = (event)=>{
    console.log(event.target.value)
    const element = {
      "_id" : event.target.value,
      "token": usertoken
    }
  console.log(element)
   axios.post(deleteApi,element)
   .then(response=>{
          console.log(response)
          if(response.data.status=== 'Job Deleted'){
              window.location.reload(true)
          }
      }
  )     
  }


  return ( <div className='container mt-5 pt-5'>
  <Header />
  
<section className="row listContainer fleft mx-5 p-5">
  <div className="row list ">
{data.map(
    (user)=>{
      return <article className='col jobTuple bg-light border-0 rounded-5 w-100 shadow mt-3 mx-3 pt-3 px-3 mb-0 pb-0' key={user._id} style={{height:"64%"}}>
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
          <div className="jobFooter mt-4 pt-5 mb-0 pb-0">
          <div className="fleft mt-2 pt-3 mb-0 pb-0">{user.createdAt}</div>

            {/* <div>
Posted  <ReactTimeAgo date={user.createdAt} locale="en-US"/>
</div> */}
            <button className='btn btn-danger flex-center mt-2 align-items-center' value={user._id} onClick={deleteData}><i class="bi bi-trash-fill"></i></button>
          </div>
        
      </article>
    //   <div className="card mt-5 pt-5">
    //   <div className="card text-bg-primary mt-3" style={{float: 'left'}}>
    //   <div className="card-header">{user.titleofrole}</div>
    //   <div className="card-body">
    //     <h5 className="card-title">Primary card title</h5>
    //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    // </div>
    
    // </div>
  
    }
  )
}

{/* <div className="card text-bg-secondary mb-3" style={{float: 'left'}}>
      <div className="card-header"></div>
      <div className="card-body">
        <h5 className="card-title">Secondary card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-bg-success mb-3" style={{float: 'left'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Success card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-bg-danger mb-3" style={{float: 'left'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Danger card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-bg-warning mb-3" style={{float: 'left'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Warning card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-bg-info mb-3" style={{float: 'left'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Info card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-bg-light mb-3" style={{float: 'left'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Light card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-bg-dark mb-3" style={{float: 'left'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Dark card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div> */}
    </div>
    </section>
    {/* <Footer /> */}

</div>


  )
}