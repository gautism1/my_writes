import React,{lazy,Suspense }  from 'react';

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
    </div>
    );
}

export default heroheader;
