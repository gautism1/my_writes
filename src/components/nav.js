import React from 'react';
import './nav.css';  
import { Link } from 'react-router-dom';
function nav()
{
    return(
    <div className="header">
    <div className="nav">
    
       <ul> 
       <div className="logo">Litecode</div>
          <li><Link  exact to="/" className="link">Home</Link>
          </li>
          <li><Link to="/Blogs" className="link">Blogs</Link>
          </li>
        
           <li>
          <Link to="/Contact" className="link">Contact</Link> 
           </li>
       </ul>
    </div>
     
    </div>
    );
}

  export default nav;