import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import Footer from '../Components/Footer';

export default function About() {
  return (
    <>
    
      <br></br>
       {/* <div class="row">
       <div class="col-sm-1"></div>
        <div class="col-sm-1">
          <img src={Logo} alt='logo' style={{ width: '200px', height: '200px' }}  />
        </div>
        <div class="col-sm-10"></div>
      </div> */}
      {/* <br></br> */}
    
      <div class="row">
        {/* <div class="col-sm-2">
          <img src={Logo} alt='logo' style={{ width: '200px', height: '200px' }}  />
        </div> */}
        <div class="col-sm-12">
          <TopNavBar />
        </div>
      </div>
       
      
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
