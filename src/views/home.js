import React from 'react';
import Navigation from '../component/navaBar';
import ParticlesComponent from '../component/Particles'
// import ParticlesComponent from './component/Particles'
import "./style.css"


const Home = () => {
 

  return (



    <>
    <Navigation/>
    <div className='cs'>

<section className=''>
<div className='container'>
  <div className='text-center'>
<h1 id="heading-one">HI , i'm Djanati UWASE</h1>
<h4 id="heading-two">A Software Developer</h4>
  </div>
  <div className='row justify-content-center'>
    <div className='col-md-8 text-center'>
<p className='text-muted my-4' id='paragraph'>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              maxime alias, ipsam dicta beatae sed nesciunt iusto eos id nemo
              perspiciatis doloremque rem veniam voluptatum quidem dolorem
              dolore magni sapiente! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Maxime sequi ab sint nostrum
              
</p>
<a className='btn btn-primary fw-bold mx-3' id="btn-one" href='#'>Contact Me</a>

<a className='btn btn-primary fw-bold' id="btn-two" href='#'>My Resume</a>

    </div>
  </div>
</div>


</section>

</div>
</>

  )
}

export default Home