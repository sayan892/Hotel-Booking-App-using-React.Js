import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import rom1 from "../images/itc.jpg";
import rom2 from'../images/itc1.jpg';
import rom3 from '../images/itc2.jpg';
import rom4 from '../images/itc3.jpg';
import $ from 'jquery';
const Description = () => {
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }
      function Hide(){
         $('#later').toggle()
      }
      
    return(
        <>
        <nav className="navbar   bg-color  " style={{height:"70px"}}>
        <Link to="/list"><i className="fas fa-angle-left" style={{fontSize:"20px",color:"black"}}></i></Link>
        </nav>
        
        <OwlCarousel className='owl-theme'rewind dots={true} autoplay items="1">
    <div class='item'>
        <img src={rom2} alt="hotel" style={{height:"250px"}}/>
    </div>
    <div class='item'>
         <img src={rom1} alt="hotel"  style={{height:"250px"}}/>
    </div>
    <div class='item'>
    <img src={rom3} alt="hotel"  style={{height:"250px"}}/>
    </div>
    <div class='item'>
    <img src={rom4} alt="hotel" />
    </div>
</OwlCarousel>
<div className="container">
  <div className="row">
    <div className="d-flex ">
      <div className="col-1">
      <span class="badge badge-secondary">Hotel</span>
      </div>
      <div className="col-8 ml-3">
      <h5>ITC Royal Bengal</h5>
      </div>
      <div className="col-3">
        <i className="fal fa-heart"></i>
      <i class="fal fa-share-alt ml-4"></i>
      </div>
      </div>
      <div className="col-12">
      <div className="d-flex mt-2">
      <i class="fas fa-map-marker-alt ml-2 mt-1 mr-2"></i>
      <h6 className="mr-2">JBS Haldane Ave Kolkata</h6>
      <a href="/#" className="ml-2">See on Map</a>
      </div>
      </div>
      <div className="col-12">
          <h5 className="ml-2">Description</h5>
      </div>
      <div className="col-12">
         <p className="ml-2">Situated in Kolkata, 7 km from Indian Museum, ITC Royal Bengal, a Luxury Collection Hotel,<span id="dots">...</span> <span id="more">Kolkata features accommodation with a restaurant, free private parking, a fitness centre and a bar. Featuring a garden, the 5-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. The accommodation offers a 24-hour front desk, room service and currency exchange for guests.</span></p>
         <button onClick={myFunction} id="myBtn">Read more</button>
      </div>
  </div>
  <hr/>
   
    <div className="row">
    <div className="col-12 ml-2">
      <h5>Facilities</h5>
      </div>
      <div className="col-6  text-center">
      <i class="fas fa-parking "></i>
      <p>Parking[Free]</p>
      </div>
      <div className="col-6 text-center">
      <i class="fas fa-wifi"></i>
      <p>Wifi[Free]</p>
      </div>
      <div className="col-6 text-center">
      <i class="fas fa-swimming-pool"></i>
      <p>Swimming Pool</p>
      </div>
      <div className="col-6 text-center">
      <i class="fas fa-spa "></i>
      <p>Spa</p>
      </div>
      <div className="col-6 text-center">
      <i class="fal fa-hot-tub"></i>
      <p>Steam Room</p>
      </div>
      <div className="col-6 text-center">
      <i class="fas fa-utensils"></i>
      <p>Breakfast[Free]</p>
      </div>
      <div className="col-6 text-center">
          <a href="/#" className="mt-5">All Facilities...</a>
      </div>
    </div>
    <hr/>
    <div className="row">
      <div className="col-9">
      <h5 className="ml-2">Reviews and Ratings</h5>
      </div>
      <div className="col-3">
      <span class="badge badge-success" style={{padding:"5px",fontSize:"15px"}}>4.4/5</span>
      </div>
      <div className="d-flex">
        <p className="ml-4" style={{fontWeight:"bold"}}>2485 Reviews</p>

      <div className="vl ml-2 mr-2"></div>
        <p style={{fontWeight:"bold"}}>22486 Ratings</p>
    </div>
    </div>
    <div className="row flex-row flex-nowrap overflow-hidden">
      <div className="col-6 ml-2">
        <div className="d-flex ">
          <p>Value for Money</p>
          <p className="ml-auto">4.3</p>
        </div>
        <div class="progress" style={{height:"5px"}}>
        <div class="progress-bar bg-success" style={{width:"70%"}}></div>
      </div>
      </div>
      <div className="col-6 mr-2">
        <div className="d-flex">
          <p>Hospitality</p>
          <p className="ml-auto">4.4</p>
        </div>
        <div class="progress" style={{height:"5px"}}>
        <div class="progress-bar bg-success" style={{width:"80%"}}></div>
      </div>
      </div>
    </div>
    <div className="row flex-row flex-nowrap overflow-hidden">
      <div className="col-6 ml-2">
        <div className="d-flex mt-2">
          <p>Food/Facilities</p>
          <p className="ml-auto">4.4</p>
        </div>
        <div class="progress" style={{height:"5px"}}>
        <div class="progress-bar bg-success" style={{width:"80%"}}></div>
      </div>
      </div>
      <div className="col-6 mr-2">
        <div className="d-flex mt-2">
          <p>Safety/Hygiene</p>
          <p className="ml-auto">4.2</p>
        </div>
        <div class="progress" style={{height:"5px"}}>
        <div class="progress-bar bg-success" style={{width:"65%"}}></div>
      </div>
      </div>
    </div>
 
    <div className="col-12 mt-3"><h6 className="font-weight-bold">Top Reviews:</h6></div>
    <div className="row flex-row flex-nowrap overflow-auto" >
    <div class=" col-11 col-sm-5 col-md-4 py-1" style={{paddingRight:0}}>
  <div class="card" style={{backgroundColor:"lightgray"}}>
    <div class="card-body text-center">
      <div className="d-flex">
      <div className="reviews"><p>A</p></div>
      <p className="ml-1"style={{color:"blue"}}>Abhishek Raj</p>
      <span class="badge badge-success ml-auto" style={{height:"25px",fontSize:"15px"}}>4.5 <i className="fas fa-star"></i></span>
      
      </div>
      <div className="col-12">
      <p style={{fontWeight:"bold",fontSize:"15px"}}>“Magnificent look and lavish interiors. Very courteous staffs. Spacious rooms. Excellent location.”</p></div>
    </div>
  </div>
</div>
   
<div class=" col-11  col-sm-5 col-md-4 py-1" style={{paddingRight:0}}>
  <div class="card" style={{backgroundColor:"lightgray"}}>
    <div class="card-body text-center">
    <div className="d-flex">

     
      <div className="reviews1"><p>S</p></div>
      <p className="ml-1"style={{color:"teal"}}>Surya Patil</p>
      <span class="badge badge-success ml-auto" style={{height:"25px",fontSize:"15px"}}>4.3 <i className="fas fa-star"></i></span>
    
      </div>
    
      <div className="col-12">
      <p style={{fontWeight:"bold",fontSize:"15px"}}>“The food, the hygiene, courteous and approachable staff all made up a complete package......”</p></div>
    </div>
  </div>
</div>
   
<div class=" col-11 col-sm-5 col-md-4 py-1" style={{paddingRight:0}}>
  <div class="card" style={{backgroundColor:"lightgray"}}>
    <div class="card-body text-center">
      <div className="d-flex">
      <div className="reviews2"><p>K</p></div>
      <p className="ml-1"style={{color:"royalblue"}}>Kajal Singh</p>
      <span class="badge badge-success ml-auto" style={{height:"25px",fontSize:"15px"}}>4.4 <i className="fas fa-star"></i></span>
      </div>
      <div className="col-12">
      <p style={{fontWeight:"bold",fontSize:"15px"}}>“Overall the experience of my stay was excellent...With special thanks to Anisha from front desk......”</p></div>
    
    </div>
   
  </div>
</div>
</div>
<button className="mt-2 ml-3 rev"> <a href="/#">Read all reviews</a></button>
<div className="row mt-3 ">
  <div className="col-12 ml-2">
  <div className="d-flex justify-content-between align-items-center">
    <p className="font-weight-bold">Places of interest nearby</p>
    <i class="far fa-university mr-5"></i>
  </div>
  </div>
  <div className="col-12">
  <ul class="list-group list-group-flush">
  <li class="list-group-item d-flex justify-content-between align-items-center">Science City<span>680 m</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Victoria Memorial -<span> 5.37 km</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Mother Wax Museum<span>3.74 km</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Indian Museum<span>4.93 km</span></li>

  <li class="list-group-item d-flex justify-content-between align-items-center">Eco Tourism Park<span>10.48 km</span></li>
   <li class="list-group-item d-flex justify-content-between align-items-center">St Georges Church<span>3.03 km</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Eden Gardens<span>5.06 km</span></li>
</ul>
</div>
</div>
<div id="later" className="row">
  <div className="col-12 ml-1">
<div className="d-flex justify-content-between align-items-center">
    <p className="font-weight-bold">Shopping</p>
    <i class="far fa-shopping-bag mr-5"></i>
  </div>
</div>
<div className="col-12">
  <ul class="list-group list-group-flush">
  <li class="list-group-item d-flex justify-content-between align-items-center">New Market<span> 8.3 km</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Mani Square<span> 5.8 km</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Acropolis Mall<span> 5.1 km</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">South City Mall<span> 8.7 km</span></li>
  </ul>
  </div>
  <div className="col-12 ml-1">
<div className="d-flex justify-content-between align-items-center">
    <p className="font-weight-bold">Hospitals nearby</p>
    <i class="far fa-hospital mr-5"></i>
  </div>
</div>
<div className="col-12">
  <ul class="list-group list-group-flush">
  <li class="list-group-item d-flex justify-content-between align-items-center">Fortis Hospital<span> 3.5 km</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Desun Hospital<span> 3.8 km</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Ruby General Hospital<span> 4.1 km</span></li>
  <li class="list-group-item d-flex justify-content-between align-items-center">Apollo Gleneagles Hospital<span> 5.2 km</span></li>

  </ul>
  </div>
  <div className="col-12 ml-1">
<div className="d-flex justify-content-between align-items-center">
    <p className="font-weight-bold">Public Transportation</p>
    <i class="far fa-subway mr-5"></i>
  </div>
</div>
<div className="col-12">
  <ul class="list-group list-group-flush">
  <li class="list-group-item d-flex justify-content-between align-items-center">Central Metro Station<span> 4.9 km</span></li>
  </ul>
  </div>
  </div>
  <div className="wrapper" style={{textAlign:"center"}}>
  <button onClick={Hide} className="show1">See more</button></div>
</div>

<button type="button" className="bunt">Select Rooms</button> 
</>

    )
}
export default Description;