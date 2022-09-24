import React from 'react';
import Navigation from '../component/navaBar';
import ParticlesComponent from '../component/Particles'
// import ParticlesComponent from './component/Particles'
import "./style.css"


const Home = () => {
 

  return (



    <>
    <Navigation/>

<section className='home-section'>

  <div className='container'>
 
<div className='title'>
  <h1>Hi,I'm Djanati UWASE</h1>
  <h4>A Softawre Engineer</h4>
</div>
<div className='intro'>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum qui
              atque neque sit repellat ullam architecto tenetur quibusdam
              aspernatur deleniti.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum qui
              atque neque sit repellat ullam architecto tenetur quibusdam
              aspernatur deleniti.
              
              
              
              </p>
</div>

<div className='btn'>
  <a href='' className='contact'>Contact Me</a>
  <a href='' className='resume'>Resume</a>
</div>


  </div>


   
 
</section>


</>

  )
}

export default Home