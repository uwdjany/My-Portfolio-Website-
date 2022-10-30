import React from 'react'

import { Paper, Button , Card ,CardMedia } from '@mui/material'
import "./workstyle.css"
function WorkItem({item})
{
    return (
        <>
       <h1 style={{justifyContent:"center",textAlign:"center",color:"white"}}>My Work</h1>
        <Paper>
        <Card sx={{ maxWidth: 2045,display:"flex" , paddingTop:"40px",height:"50vh",backgroundColor:"#00003b",paddingLeft:"60px"}}>
        
        <CardMedia sx={{display:"flex" , gap:"5rem"}}>
        <img src={item.image} alt={item.title} style={{width:"90%",height:"30vh",paddingLeft:"8%"}}/>
       
            <div className='description' style={{paddingTop:"40px",fontSize:"2rem"}}>
            <h2 style={{color:"white"}}>{item.title}</h2>
            <a href className="CheckButton">
            Visit Site!
        </a>
            </div>
            </CardMedia>
            

           
            

          

{/*<img src={item.image} alt={item.title} style={{width:"20%",height:"30vh"}}/>
            
            <div className='description' style={{display:"flex"}}>
            <h2>{item.title}</h2>
            </div>
            

            <Button className="CheckButton">
                Check it out!
    </Button>*/}
    
</Card>
        </Paper>
   </>
      
    )
}

export default WorkItem