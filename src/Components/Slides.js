import React from 'react'
import Slide1 from'../Images/banner-img.jpg'
import Slide2 from'../Images/banner-img2.jpg'
import Slide3 from'../Images/banner-img3.webp'



function Slides() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Slide1} class="d-block w-100 object-fit-fill border rounded" height="450"/>
    </div>
    <div class="carousel-item">
      <img src={Slide2} class="d-block w-100 object-fit-cover border rounded" height="450"/>
    </div>
    <div class="carousel-item">
      <img src={Slide3} class="d-block w-100 object-fit-cover border rounded" height="450"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slides