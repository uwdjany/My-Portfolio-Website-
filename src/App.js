import React from 'react'
import ParticlesComponent from './component/Particles';

// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/home';
import Navigation from './component/navaBar';
import ABOUT from './views/about';



const App = () => {
  return (
    <>
    
 {/* <Navigation/> */}

   <Home/>
   {/* <ParticlesComponent/> */}
   <ABOUT/>

    
   
    </>
   
  )
}

export default App