import React from 'react'
import ParticlesComponent from './component/Particles';

// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/home';
import Navigation from './component/navaBar';
import ABOUT from './views/about';
import Work from './views/work';




const App = () => {
  return (
    <>
    
 {/* <Navigation/> */}

   <Home/>
   {/* <ParticlesComponent/> */}
   <ABOUT/>

   <Work/>
   
    </>
   
  )
}

export default App