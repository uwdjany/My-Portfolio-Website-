import React from 'react';
import ParticlesComponent from '../component/Particles'
// import ParticlesComponent from './component/Particles'
import "./style.css"
import Particles from "react-tsparticles";

const Home = () => {

  const particlesInit = (main) =>{
    console.log(main);
  };
  const particlesLoaded = (container) =>{
    console.log(container);
  };
  return (
<section className='home-section'>

<Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#777",
                //     },
                // },
                fpsLimit: 600,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
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

  )
}

export default Home