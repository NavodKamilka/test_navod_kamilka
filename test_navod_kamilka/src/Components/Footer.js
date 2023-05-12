import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <div >
 
<footer class="text-center text-lg-start bg-white text-muted">
  
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
   
  
  </section>
  
  <section class="" >
    <div class="container text-center text-md-start mt-5">
  
      <div class="row mt-3">
    
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
     
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Infinitix Software
          </h6>
          <p>
          As an established software company with over five years of experience, 
          we have been delivering exceptional solutions to our clients, leveraging our expertise, 
          and adapting to the evolving industry landscape with excellence and innovation.
          </p>
        </div>
      
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Xero</a>
          </p>
          <p>
            <a href="#!" class="text-reset">VMware</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Sap</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Atlassian</a>
          </p>
        </div>
     
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><FontAwesomeIcon icon="fa-solid fa-location-dot" />Nugegoda, Colombo, Sri Lanka</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            infinitixsoftware.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> +94 11 222 33 33</p>
          <p><i class="fas fa-print me-3 text-secondary"></i> +94 77 8393860</p>
        </div>
  
      </div>
 
    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor: '#484848'}}>
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://infinitixsoftware.com/">infinitixsoftware.com</a>
  </div>

</footer>

    </div>
  )
}
