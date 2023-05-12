import React from 'react';
import Picture4 from '../Assets/Picture4.jpg'
import Picture6 from '../Assets/Picture6.jpg'
import Picture10 from '../Assets/Picture10.jpg'
import '../Style/CSS/Carousel.css'

const Carousel = () => {
  return (
    <div >
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" style={{ borderRadius: "20px" }}>
        <div className="carousel-item active">
          <img className="d-block w-100 carousel-img" src={Picture10} alt="First slide" style={{ borderRadius: "20px" }}/>
          <div class="carousel-caption d-none d-md-block">
            {/* <div class="row">
              <div class="col-sm-3"></div>
              <div class="col-sm-3"></div>
              <div class="col-sm-3"></div>
                <div class="col-sm-3" style={{ borderRadius: '10px'}}>
                  <h1 className="text-right" style={{text: '#B1D4E0',color: 'green'}} >"Inspire Software Excellence with Infinitix software."</h1>
                </div>
            </div> */}
            {/* <div class="row">
              <div class="col-sm-8"></div>
                <div class="col-sm-4">
                  <h3>Infinitix Software</h3>
                </div>
            </div> */}
          
          
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carousel-img" src={Picture4} alt="Second slide" style={{ borderRadius: "20px" }}/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carousel-img" src={Picture6} alt="Third slide" style={{ borderRadius: "20px" }}/>
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
