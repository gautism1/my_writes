import React from 'react'
import Dp from '../assets/dp.jpg'
import './comp.css'

function about()
{
    return(

<div>
        <div className="aboutme">
            <div className="about">
             <p>Hello Geeks</p>
              <br></br> 
              <h3> We are Litecoders, we welcome you</h3>
                <span>
             We are a team of passionate web developers </span>
               <p>  Here  we are to help the other <br></br>students who are not capable to code a single line
                </p>
            </div>
            <div className="photo">
              <img src={Dp} className="dp"/>
              </div>
              
              </div>
 
        </div>
    )
}export default about;