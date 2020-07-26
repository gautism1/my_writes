import React,{lazy,Suspense }  from 'react';
import Post from './posts.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Title =lazy(()=> import('./title'));

const List=lazy(()=>import('./list'));

const renderloader = () =>  <div className="loading">Loading...
please wait</div>;
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
