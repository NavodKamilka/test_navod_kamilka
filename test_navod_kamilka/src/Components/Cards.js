import React from 'react'
import Member4 from '../Assets/Member4.jpg'
import Member2 from '../Assets/Member2.jpg'
import Member3 from '../Assets/Member3.jpg'

export default function Cards() {
  return (
    <div className='container'>
      <div class="card-deck">
  <div class="card" style={{ backgroundColor: '#c6cdda' }}>
    <img class="card-img-top" src={Member4} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Chief Executive Officer (CEO)</h5>
      <p class="card-text">Introducing Mr. W.L. Keplan, a visionary leader at the helm of Infinitix. 
      With a profound passion for technology and innovation, Mr. W.L. Keplan has spearheaded the company's growth and transformation. 
      Their strategic acumen, combined with an unwavering commitment to excellence, has propelled Infinitix to the 
      forefront of the industry, revolutionizing how businesses leverage software solutions for success.</p>
      {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>
  <div class="card" style={{ backgroundColor: '#DDDDA4' }}>
    <img class="card-img-top" src={Member2} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Chief technology officer (CTO)</h5>
      <p class="card-text">Meet Ms. Aarya, the brilliant mind behind the technological prowess of Infinitix. With a wealth 
      of experience in software development and a deep understanding of emerging technologies, Ms. Aarya leads our talented team of 
      engineers to deliver cutting-edge solutions that drive innovation. 
      Their strategic vision and technical expertise shape the future of our company's products and services.</p>
      {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>
  <div  class="card" style={{ backgroundColor: '#beead8' }}>
    <img class="card-img-top" src={Member3} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Managing Director</h5>
      <p class="card-text">Meet Mrs. Nova, the visionary leader guiding Infinitix's success. With a strategic mindset 
      and unwavering commitment, Mrs. Nova propels the company to new heights. Their expertise in driving innovation 
      and fostering a culture of excellence ensures client satisfaction and industry recognition.</p>
      {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>
</div>
    </div>
  )
}
