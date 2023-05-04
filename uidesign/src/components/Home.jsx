import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Header } from './Header';
import { Footer } from './Footer';

export const Home = () => {
    const ApiUrl = "http://localhost:1000/api/viewalljobs"
  const [data,setData] =useState([])

  useEffect(() => {
    axios.get(ApiUrl).then(
      (response)=>{
        console.log(response)
        setData(response.data)
      }
    )
  }, []);

  return (
    <div>
        <Header />
      
      {data.map(
          (user)=>{
            return <div className="card mt-5 pt-5">
            <div className="card text-bg-primary mt-3" style={{float: 'left'}}>
            <div className="card-header">{user.titleofrole}</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          
          </div>
        
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
          
          <Footer />

</div>

  )
}

