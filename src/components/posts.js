import React from 'react'
  import logimg from '../assets/react.svg';
import './comp.css'
 import bloginfo from './db/bloginfo.js'
 import image from '../assets/dp.jpg'
import {Link} from 'react-router-dom'
function post()
{
    return(
 <div className="postcard"> 

<div className="innerpost">
<div className="card"> 
<div className="cardinner">
     <div className="underline"> </div>
      <div className="cardimage">
          <Link to="/Blogs">  <img src={logimg} className="image"></img> </Link>
         
     </div>
     <div className="headingtopic">
     <Link to="/Blogs">   <h2  className="topicname"> First "React" towards react</h2> </Link>
    </div>
      <div className="author">
      <div>
        <a href="https://www.linkedin.com/in/vipingautamj/">      <img src={image} alt="About the post image" className="author-image"></img></a>
              </div>
<div>   <p> Vipin Gautam</p>
<p className="date"> July 24,2020</p>  
 
 </div>
    </div>
       <div className="Desciption">
       <p> This is the first Lite_code :
       <br>
       </br>
       How to start Reactjs </p>
     </div>


</div>
  </div>
</div>
</div>
  
    );
}
export default post;