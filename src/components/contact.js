import React from 'react'

import About  from  './about.js'
import './comp.css'
function contact()
{
    return(
  <div>
  <About/>
  <div className="contact-top"> 
  <br></br>
  <br></br>
  <div className="contact">
            <div className="contactinfo">
            You can contact us througn mail:
            <br></br>
            <p>vipingautam.m@gmail.com</p>
            also you can contact us through 
            <br></br>
           <a href="   https://www.linkedin.com/in/vipingautamj/"> <code>
              Linkdin</code></a>
        </div>
         
        </div>
</div>
</div>


    );
}
export default contact;