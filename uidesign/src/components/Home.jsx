import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Header } from './Header'

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
            return <div className="card">
            <div className="card text-bg-primary mb-3" style={{float: 'left'}}>
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
    </div>
  )
}
