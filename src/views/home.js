import React from 'react';
import Navigation from '../component/navaBar';
import ParticlesComponent from '../component/Particles'
import ABOUT from './about';
// import ParticlesComponent from './component/Particles'
import "./style.css"
import Work from './work';


const Home = () => {
 

  return (



    <>
    <Navigation/>
    <div className='cs' id='home'>

<section className=''>
<div className='container-lg' id='content-one'>
  <div className='text-center'>
<h1 id="heading-one">HI , i'm Djanati UWASE</h1>
<h4 id="heading-two">A Software Developer</h4>
  </div>
  <div className='row justify-content-center'>
    <div className='col-md-8 text-center'>
<p className='text-muted my-4' id='paragraph'>
I’m a Full Stack Web developer who have a bachelor’s degree in Computer science  from ULK GISENYI. 
Motivated, adaptable, quick learner, always attentive, empathetic and organized, I am also passionate about new technologies

              
</p>
<a className='btn btn-primary fw-bold mx-3' id="btn-one" href='#'>Contact Me</a>

<a className='btn btn-primary fw-bold' id="btn-two" href='#'>My Resume</a>

    </div>
  </div>
</div>


</section>

</div>
<ABOUT/>
<Work/>


</>

  )
}

export default Home