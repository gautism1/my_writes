import React from 'react'

import About  from  './about.js'
import './comp.css'
function contact()
{
    return(
  <div>
  <About/>
  <div className="contact-top"> 
  <div className="contact">
            <div className="contactinfo">
            You can contact me througn mail:
            <br></br>
            <p>vipingautam.m@gmail.com</p>
            also you can contact me through my Linkdin
            <br></br>
            <code>
            https://www.linkedin.com/in/vipingautamj/</code>
        </div>
         
        </div>
</div>
</div>


    );
}
export default contact;