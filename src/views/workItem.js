import React from 'react'

import { Paper, Button , Card ,CardMedia } from '@mui/material'
import "./workstyle.css"
function WorkItem({item})
{
    return (
        <>
       
        <Paper>
        <Card sx={{ maxWidth: 2045,display:"flex" , paddingTop:"40px",height:"50vh",backgroundColor:"#00003b",justifyContent:"center"}}>
        
        <CardMedia>
        <img src={item.image} alt={item.title} style={{width:"90%",height:"30vh"}}/>
       
            <div className='description' style={{}}>
            <h2>{item.title}</h2>
            <Button className="CheckButton">
            Check it out!
        </Button>
            </div>
            </CardMedia>
            

           <CardMedia>

            <img src={item.image} alt={item.title} style={{width:"90%",height:"30vh"}}/>
       
            <div className='description' style={{}}>
            <h2>{item.title}</h2>
            <Button className="CheckButton">
            Check it out!
        </Button>
            </div>
            </CardMedia>
            

           <CardMedia>
            <img src={item.image} alt={item.title} style={{width:"90%",height:"30vh"}}/>
       
            <div className='description' style={{}}>
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