import React,{lazy,Suspense }  from 'react';
import Post from './posts.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Title =lazy(()=> import('./title'));


const renderloader = () =>  <div className="loading">Loading...
please your content is ready wait</div>;
function heroheader()
{
    return(
    <div >   
        <div>
               <Title/>               
        </div>
        <Post/>
    </div>
    );
}

export default heroheader;
