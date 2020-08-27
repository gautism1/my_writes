import React from 'react';
import image from '../assets/dp.jpg'
import logimg from '../assets/react.svg';
import npx from '../assets/npx.svg';
import folder from '../assets/folderreact.png';
import started from '../assets/start.png';
import './comp.css';
import details from './details'

function blogs()
{ 
    return(
        <div className="head"> 
<div id="gajju1">
       <h1 className="head-inside">  {details.blogs.blogheading}</h1>  
               <div>
               <img src={logimg} className="logimg"></img>
               </div>
                 <div className="info">
                   <div className="author">
                     <div>
                       <a href="https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e">    
                         <img src={image} alt="About the post image" className="author-image"></img></a>
                     </div>
                    <div>   <p> Vipin Gautam</p>
                             <p className="date"> July 24,2019</p>  
 
                     </div>
                   </div>      
                   <br></br>
                   <h3>
                   How to start?</h3><h4> Just start a basic project as a beginner and start building very small projects that 
                   includes basic but important concepts of React</h4>
              <p>
               React is a Javascript library that enable a developer to make its work faster,quicker.
               It was introduced in 2011 by a  facebook's software engineer to make it for their own
                use later on it got its name React and due to its cool features it got popularised more 
                to read history<a href="#"></a>  </p>
              <p>
              <hr></hr>
              Over the past 10 years,  React has been one of the  favourite JS library to use.
              </p>
              <p> React has gained its popularity ass it is open source used by many big platforms</p>
              <hr></hr>
            <p>     Below I have discussd how to start with Reactjs .  
            </p>
             <span className="spanlist">Prerequists required to start with
                 <ul>
                 <li>1. Node installed in the system if not installed please got to <a href="https://nodejs.org/en/">this link</a>
                 </li>
                 <li>2. NPM should be installed ,if not please visit <a href="#">this one</a>
                 </li>
                 <li>3. Should have a TextEdtor like VS,Atom etc which ever user is suitable.

                 </li>
                 <li>
                 4. Most important : Basic knowledge of HTML and CSS and good in JS
                 </li>
                 </ul>
             </span>           
<div>
Open the terminal of texteditor and start to install React library to start .
Use this command to create React project
<p> <img src={npx} className="npx"></img></p>
<p>
Now wait for sometime it will create a folder of your project. 
Go inside that folder 
<br></br>
<img src={folder} className="folder "></img>
 <p>The most IMPORTANT is App.js .In our next Lite_code we will discuss about the files and folder used in this folder </p>
</p>
<p>
To test whether our React-app is working or not correctly 
<span> we will again go to or Terminal,
runour react-app using npm start;
</span>
<p> <img src={started} className="start"></img></p>
</p>
<h3> Now what?Start to build in most popular  library</h3>
</div> 
<div>
</div>
              </div >
            </div>
   <div id="gajju2">
       <h1 className="head-inside">  {details.blogs.blogheading}</h1>  
               <div>
               <img src={logimg} className="logimg"></img>
               </div>
                 <div className="info">
                   <div className="author">
                     <div>
                       <a href="https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e">    
                         <img src={image} alt="About the post image" className="author-image"></img></a>
                     </div>
                    <div>   <p> Vipin Gautam</p>
                             <p className="date"> July 24,2019</p>  
 
                     </div>
                   </div>      
                   <br></br>
                   <h3>
                   How to start?</h3><h4> Just start a basic project as a beginner and start building very small projects that 
                   includes basic but important concepts of React</h4>
              <p>
               React is a Javascript library that enable a developer to make its work faster,quicker.
               It was introduced in 2011 by a  facebook's software engineer to make it for their own
                use later on it got its name React and due to its cool features it got popularised more 
                to read history<a href="#"></a>  </p>
              <p>
              <hr></hr>
              Over the past 10 years,  React has been one of the  favourite JS library to use.
              </p>
              <p> React has gained its popularity ass it is open source used by many big platforms</p>
              <hr></hr>
            <p>     Below I have discussd how to start with Reactjs .  
            </p>
             <span className="spanlist">Prerequists required to start with
                 <ul>
                 <li>1. Node installed in the system if not installed please got to <a href="https://nodejs.org/en/">this link</a>
                 </li>
                 <li>2. NPM should be installed ,if not please visit <a href="#">this one</a>
                 </li>
                 <li>3. Should have a TextEdtor like VS,Atom etc which ever user is suitable.

                 </li>
                 <li>
                 4. Most important : Basic knowledge of HTML and CSS and good in JS
                 </li>
                 </ul>
             </span>           

 
<div>

Open the terminal of texteditor and start to install React library to start .
Use this command to create React project
<p> <img src={npx} className="npx"></img></p>
<p>

Now wait for sometime it will create a folder of your project. 
Go inside that folder 
<br></br>
<img src={folder} className="folder "></img>
 
 <p>The most IMPORTANT is App.js .In our next Lite_code we will discuss about the files and folder used in this folder </p>

</p>
<p>
To test whether our React-app is working or not correctly 
<span> we will again go to or Terminal,
runour react-app using npm start;
</span>
<p> <img src={started} className="start"></img></p>
</p>
<h3> Now what?Start to build in most popular  library</h3>
</div> 
<div>

  
</div>
             
              </div >

          

            </div>
        </div>
        
    );
}

export default blogs;
