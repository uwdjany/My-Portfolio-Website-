import React from "react";
import "./workstyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { myWorkData } from "../assets/workData/myData";
const Work = () => {
  return (
    <>
      <section id="work">


    
      <div className="container">
      { myWorkData.map(item=>(
        <div className="card">
        <div className="card-top" id="card-one">
        <img src={item.linkImg} alt={item.title} id="img-work"/>
        <h1>{item.title}</h1>
        
        </div>
        <div className="card-bottom">
        <h3>{item.price}</h3>
        <p>{item.category}</p>
        </div>
        </div>


      ))}
       
       
        </div>
      </section>
    </>
  );
};

export default Work;
