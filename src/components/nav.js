import React from 'react';
import './nav.css';  
import { NavLink } from 'react-router-dom';
import details from './details';

function nav()
{ 
    const { navBar }=details;
    const { navBarLinks }=navBar;
    return(
    <div className="header">
    <div className="nav">
       <ul> 
          <span className="logo">{navBar.name}</span>
       { navBarLinks.map((Link,index)=> (
                <NavLink key="index" exact to={Link.to} className="link" activeClassName="active" >{Link.name}</NavLink>
           ))
       }
       </ul>
    </div>
    </div>
    );
}

  export default nav;