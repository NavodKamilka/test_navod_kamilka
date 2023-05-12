import React from 'react';
import Login from '../Assets/login.jpg'
import '../Style/CSS/Carousel.css'

const Carousel = () => {
  return (
    <div className='container'>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 carousel-img" src={Login} alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
          <h5>Add some one</h5>
          <p>dfdfdf</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carousel-img" src={Login} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carousel-img" src={Login} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
  );
};

export default Carousel;
