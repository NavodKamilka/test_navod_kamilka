import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import Carousel from '../Components/Carousel';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';

export default function LandingPage() {

  return (
    <div className='container'>
      <br></br>
       <div class="row">
        <div class="col-sm-2">
          eBeyonds
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col-sm-12">
          <TopNavBar />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <Carousel />
        </div>
      </div><br></br><br></br><br></br>
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <h2>OUR TEAMS ARE HERE</h2>
        </div>
      </div><br></br>
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <h6>Parents have the ability to customize and control internet access on 
            different times of the day. Parents can set time limits for different 
            apps/websites and even block apps that their children use excessively.</h6>
        </div>
      </div><br></br>
      <div class="row">
        <div class="col-sm-12">
          <Cards />
        </div>
      </div><br></br>

      <div class="row">
        <div class="col-sm-12">
          <Footer />
        </div>
      </div>
      
      
    </div>


  )
}
