import React from 'react'
import myImg from "../assets/image/image.jpg";
import './aboutstyle.css'

const ABOUT = () => {
  return (
    <section className='about' id='abouting'>
        <div className='container'>
            <div className='text-center'>
                <h2 className='fw-bold' id='heading-2'>About Me</h2>
            </div>

<div className='row my-5 justify-content-center'>
    <div className='col-lg-3'>
        <img src={myImg} className='img-fluid' id='image-about'/>
    </div>


<div className='col-lg-4'>
    <h5 className='fw-bold' id='heading-5'>Who I am</h5>
    <p id='paragraph-about'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam voluptates provident deleniti nisi mollitia
                      placeat repellat cupiditate blanditiis perspiciatis. A
                      temporibus, error odit obcaecati quibusdam praesentium
                      ducimus iste quas doloremque.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam voluptates provident deleniti nisi mollitia
                      placeat repellat cupiditate blanditiis perspiciatis. A
                      temporibus, error odit obcaecati quibusdam praesentium
                      ducimus iste quas doloremque.
                      ducimus iste quas doloremque.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam voluptates provident deleniti nisi mollitia
                      placeat repellat cupiditate blanditiis perspiciatis. A
                      temporibus, error odit obcaecati quibusdam praesentium
                      ducimus iste quas doloremque.
    </p>
</div>
</div>
        </div>
    </section>
  )
}

export default ABOUT;