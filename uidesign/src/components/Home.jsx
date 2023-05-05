import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Header } from './Header';
import { Footer } from './Footer';

export const Home = () => {
    const ApiUrl = "http://localhost:1000/api/viewalljobs"
  const [data,setData] =useState([])

  useEffect(() => {
    axios.post(ApiUrl).then(
      (response)=>{
        console.log("inside axios")
        console.log(response)
        setData(response.data)
      }
    )
  }, []);

  return (
    <div className='container mt-5 pt-5'>
        <Header />
      <section className="row listContainer fleft mx-5 p-5">
        <div className="row list ">
      {data.map(
          (user)=>{
            return <article className='col jobTuple bg-light border-0 rounded-5 w-100 h-100 shadow m-3 p-3' key={user._id}>
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
                <div className="jobFooter mt-2 py-3">
                  <div className="fleft mt-2 pt-3">{user.createdAt}</div>
                  <button className='btn btn-primary fright mt-2 align-items-center'>Apply</button>
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
          <Footer />

</div>

  )
}

