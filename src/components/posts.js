import React from 'react'
import logimg from '../assets/react.svg';
import './comp.css'
import bloginfo from './db/bloginfo.js'
import image from '../assets/dp.jpg'
import {Link} from 'react-router-dom'
import details from './details';
function post()
{
  const {cards} =details;
  const {cardinfo} =cards;
    return(
 <div className="postcard" > 
       <div className="innerpost">
          {
            cardinfo.map((cardinfo,index)=>(
           <div className="card"> 
              <div className="cardinner">
              <div className="underline"> </div>
                <div className="cardimage">
               <a href={cardinfo.blogurl}> <img src={cardinfo.cardtitleimgurl} className="image" alt={cards.imageurl}></img> </a>
               </div>
               <div className="headingtopic">
                  <a href= {cardinfo.blogurl}>   <h2  className="topicname"> {cardinfo.cardtitle}</h2> </a>
               </div>
               <div className="author">
               <div>
                   <a href="https://www.linkedin.com/in/vipingautamj/">   
                       <img src={image} alt="Post image" className="author-image">
                       </img>
                   </a>
              </div>
         <div> 
             <p>  
             {cardinfo.authorname}
             </p>
             <p className="date">  {cardinfo.date}
             </p>  
         </div>
             </div>
           <div className="Desciption">
           <p>
          <span>{cardinfo.description}</span></p>
          </div>
       </div>
    </div>
            ))
}
</div>
</div>
  
    );
}
export default post;