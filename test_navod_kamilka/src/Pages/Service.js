import React from 'react'
import TopNavBar from '../Components/TopNavBar'
import Footer from '../Components/Footer';
import  '../Style/CSS/Services.css';

export default function Service() {
  return (
    <div class='background-shape1' >
    
      <br></br>
       
    
      <div class="row">
        <div class="col-sm-12">
          <TopNavBar />
        </div>
      </div><br></br><br></br>

      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4 text-center">
          <h2>Our Services</h2>
        </div>
        <div class="col-sm-4"></div>
      </div><br></br><br></br>

      <div className="row">
    <div className="col-sm-4 text-center">
      <h4>Custom Software Development</h4>
      <p>Highlight your expertise in developing customized software solutions tailored to meet specific business needs.</p>
    </div>

    <div className="col-sm-4 text-center">
      <h4>Mobile App Development</h4>
      <p>Showcase your proficiency in building mobile applications for iOS and Android platforms, catering to a diverse range of industries.</p>
    </div>

    <div className="col-sm-4 text-center">
      <h4>Web Application Development</h4>
      <p>Emphasize your ability to create web-based applications that enable businesses to streamline operations and reach their target audience online.</p>
    </div>
  </div>
  <br></br>

  <div className="row">
    <div className="col-sm-4 text-center">
      <h4>Software Consulting</h4>
      <p>Describe your consultancy services, offering expert advice and guidance on software strategy, technology selection, and system architecture.</p>
    </div>

    <div className="col-sm-4 text-center">
      <h4>Software Integration</h4>
      <p>Highlight your capabilities in integrating various software systems, ensuring seamless data flow and optimized processes.</p>
    </div>

    <div className="col-sm-4 text-center">
      <h4>Enterprise Software Solutions</h4>
      <p>Showcase your expertise in building comprehensive software solutions like CRM, ERP, SCM, and other enterprise-level applications.</p>
    </div>
  </div>
  <br></br>

  <div className="row">
    <div className="col-sm-4 text-center">
      <h4>Software Testing and Quality Assurance</h4>
      <p>Communicate your commitment to delivering high-quality software by emphasizing your rigorous testing and quality assurance processes.</p>
    </div>

    <div className="col-sm-4 text-center">
      <h4>Cloud-based Solutions</h4>
      <p>Highlight your proficiency in developing cloud-based software solutions, enabling businesses to leverage the benefits of scalability, flexibility, and cost-efficiency.</p>
    </div>

    <div className="col-sm-4 text-center">
      <h4>User Experience (UX) Design</h4>
      <p>Emphasize your focus on creating intuitive and user-friendly interfaces, ensuring a positive user experience for your clients' customers.</p>
    </div>
  </div>
  <br></br><br></br>

  
  <br></br><br></br>

     
       
      
    <div className='container-fluid custom'>
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
          <Footer />
        </div>
        <div class="col-sm-1"></div>
      </div>
      </div>
      </div>
  )
}
