
import React from 'react';
import Carousel from "react-material-ui-carousel";
import WorkItem from './workItem';
import slider from "../helper/slider.json"
import data from "../helper/data.json"
import "./workstyle.css"
function Work(){
  return(
    <Carousel className='coursel'>
    {
      slider.map(item =><WorkItem key={slider.id} item={item}/>)
      
    
    }
  
   
    
    </Carousel>

  )
}

export default Work