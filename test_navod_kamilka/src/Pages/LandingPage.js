import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import Carousel from '../Components/Carousel';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
import '../Style/CSS/LandingPage.css';

export default function LandingPage() {

  return (
    <>
    <div className='container'>
      <br></br>
       <div class="row">
       <div class="col-sm-1"></div>
        <div class="col-sm-2">
          eBeyonds
        </div>
        <div class="col-sm-8"></div>
      </div>
      <br></br>
      
      <div class="row">
        <div class="col-sm-12">
          <TopNavBar />
        </div>
      </div>
       <br></br>
       </div >
      {/* <div className='container-fluid custom'> */}
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
          <Carousel />
        </div>
        <div class="col-sm-1"></div>
      </div>
      {/* </div> */}
      <br></br><br></br><br></br>
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4 text-center">
          <h2>"Our Team, Your Advantage"</h2>
        </div>
        <div class="col-sm-4"></div>
      </div><br></br>
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <h6 className='text-style'>"Get to know our dedicated and skilled team, a collective of software experts 
          who work tirelessly to deliver transformative solutions that drive business growth and exceed client expectations."</h6>
        </div>
        <div class="col-sm-3"></div>
      </div><br></br><br></br>
      <div class="row">
        <div class="col-sm-12">
          <Cards />
        </div>
      </div><br></br>
      
    <div className='container-fluid custom'>
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
          <Footer />
        </div>
        <div class="col-sm-1"></div>
      </div>
      </div>
      </>
     
      
      
    


  )
}
