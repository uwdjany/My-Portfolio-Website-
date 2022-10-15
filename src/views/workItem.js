import React from 'react'

import { Paper, Button , Card ,CardMedia } from '@mui/material'
import "./workstyle.css"
function WorkItem({item})
{
    return (
        <>
       
        <Paper>
        <Card sx={{ maxWidth: 2045,display:"flex" , paddingTop:"40px",height:"50vh",backgroundColor:"#00003b",paddingLeft:"60px"}}>
        
        <CardMedia sx={{display:"flex" , gap:"5rem"}}>
        <img src={item.image} alt={item.title} style={{width:"90%",height:"30vh"}}/>
       
            <div className='description' style={{paddingTop:"40px"}}>
            <h2>{item.title}</h2>
            <Button className="CheckButton">
            Check it out!
        </Button>
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