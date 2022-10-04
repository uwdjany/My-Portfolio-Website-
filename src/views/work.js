import React from 'react'
import imgSlider from "../assets/image/slider.jpg"
import "./aboutstyle.css"

const Work = () => {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
      <div className="card" style={{width:"19rem"}}>
      <div className='img-wrapper'>
      <img src={imgSlider} className="card-img-top" alt="..." id='image-slide'/>
      </div>
      <div className="card-body" id='carding'>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
      <div className="carousel-item">
      <div className="card"  style={{width:"19rem"}}>
      <div className='img-wrapper'>
      <img src={imgSlider} className="card-img-top" alt="..." id='image-slide'/>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
      <div className="carousel-item">
      <div className="card"  style={{width:"19rem"}}>
      <div className='img-wrapper'>
      <img src={imgSlider} className="card-img-top" alt="..." id='image-slide'/>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
      <div className="carousel-item">
      <div className="card"  style={{width:"19rem"}}>
      <div className='img-wrapper'>
      <img src={imgSlider} className="card-img-top" alt="..." id='image-slide'/>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
      <div className="carousel-item">
      <div className="card"  style={{width:"19rem"}}>
      <div className='img-wrapper'>
      <img src={imgSlider} className="card-img-top" alt="..." id='image-slide'/>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
      <div className="carousel-item">
      <div className="card"  style={{width:"19rem"}}>
      <div className='img-wrapper'>
      <img src={imgSlider} className="card-img-top" alt="..." id='image-slide'/>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </>
  )
}

export default Work
