import React from 'react';

import {
  Link
} from "react-router-dom";

import './nav.css';  
import { NavLink } from 'react-router-dom';
import details from './details';
import LitecodeHome from './Home' ;
function nav()
{ 
    const { navBar }=details;
    const { navBarLinks }=navBar;
    return(
    <div className="header">
    <div className="nav">
       <ul> 
         <Link to="/" ><span className="logo">{navBar.name}</span></Link>
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