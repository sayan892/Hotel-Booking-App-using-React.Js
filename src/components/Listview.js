import React from "react";
import { RiSoundModuleLine } from "react-icons/ri";
import {Link} from 'react-router-dom';
import { FcApproval } from "react-icons/fc";
import room1 from "../images/itc.jpg";
import room2 from "../images/jw.jpg";
import room3 from "../images/lalit.jpg";
import room4 from "../images/oberoi.jpg";
import room5 from "../images/vivanta.jpeg";
import room6 from "../images/hayatt.jpg";
import $ from 'jquery';
const Listview = () => {
  const display =()=>{
    $('.dropdown-content').slideToggle(1000);
  }
  const display2 = () =>{
    $('.custom-modal').slideDown(1000);
  }
  const close = () => {
     $('.custom-modal').slideUp(1000);
  }
  return (
    <>
       <nav className="navbar navbar-expand-sm  bg-color" >
       <Link to="/home"><i className="fas fa-angle-left" style={{fontSize:"20px",color:"black"}}></i></Link>
        <ul className="navbar-nav ml-auto">
          <Link to="/profile" className="nav__link ml-auto">
                <i className="fas fa-user"  style={{fontSize:"15px"}}></i>
               
            </Link>
        </ul>
       </nav>
       <div className="row">
          <div className="col-6 col-sm-6 col-md-6 d-flex justify-content-center dropdown" style={{border:"1px solid lightgrey",padding:"10px"}}>
             <button style={{color:"black",border:"none",background:"none"}} className="dropbtn" onClick={display}><i class="fas fa-sort-amount-up-alt"></i> Sort</button> </div>
             <div className="dropdown-content">
               <div style={{width:"100%",padding:"10px",backgroundColor:"lightgray",height:"40px",fontSize:"17px"}}><h6>SORT BY</h6></div>
               <a href="/#"><i class="fal fa-fire"></i> Popularity</a>
               <a href="/#"> <i class="fas fa-star-half-alt"></i> Guest Ratings</a>
               <a href="/#"><i class="fal fa-arrow-down"></i> Low to High <span style={{color:"gray"}}>(Cost)</span> </a>
               <a href="/#"><i class="fal fa-arrow-up"></i> High to Low <span style={{color:"gray"}}>(Cost)</span></a>

             </div>
         
          <div className="col-6 col-sm-6 col-md-6 d-flex justify-content-center " style={{border:"1px solid lightgrey",padding:"10px"}}>
            <button type="button" style={{color:"black",border:"none",background:"none"}} onClick={display2}>
              <RiSoundModuleLine /> FILTER
            </button>
           
          </div>
          <div class="custom-modal">
            <div class="head">
              <div className="d-flex justify-content-between">
                <button type="button" style={{border:"none",background:"none",fontSize:"35px",color:"white"}} onClick={close}>&times;</button>
                <p className="mt-3" style={{fontSize:"20px",fontWeight:"bold",color:"white"}}>Filters</p>
                <button type="reset" style={{border:"none",background:"none",color:"white"}} className="mr-3 text-uppercase font-weight-bold">Reset All</button>
              </div>
              </div>
              <div className="cotnt">
                <div className="d-flex justify-content-between"><p className="font-weight-bold">PRICE RANGE</p>
                <p>&#x20B9; 2000 - &#x20B9; 30000+</p></div>
              <input type="range" min="1" max="100" style={{width:"100%"}}></input>
                  <div className="d-flex justify-content-between mt-1">
                    <p style={{fontWeight:"bold"}}>PAY AT HOTEL</p>
                    <input type="checkbox"></input>
                  </div>
                  <div className="col-12" style={{paddingLeft:0}}>
                    <p className="font-weight-bold">HOTEL AMENITIES</p>
                  </div>
                  <div className="col-7" style={{fontSize:"18px"}}>
                  <span class="badge badge-pill badge-secondary px-2 py-2 mb-1 mx-1">Wi-Fi</span>
                  <span class="badge badge-pill badge-secondary px-2 py-2 mx-1">Spa</span>
                  <span class="badge badge-pill badge-secondary px-2 py-2  mb-1 mx-1">Room Service</span>
                  <span class="badge badge-pill badge-secondary px-2 py-2 mx-1">Cafe</span>
                  <span class="badge badge-pill badge-secondary px-2 py-2 mx-1">Barbeque</span>
                  <span class="badge badge-pill badge-secondary px-2 py-2 mx-1">Fireplace</span>
                  </div>
                  <button type="button" style={{color:"blue",
                  border:"none",background:"none",margin:"10px"}}>Show more Amenities</button>
                  <div className="col-12" style={{paddingLeft:0}}>
                    <p className="text-uppercase font-weight-bold">Star Rating</p>
                  </div>
                  <div className="col-10" style={{fontSize:"17px"}}>
                  <span class="badge badge-pill badge-secondary px-2 py-2 mx-1">3 Star</span>
                  <span class="badge badge-pill badge-secondary px-2 py-2 mx-1">4 Star</span>
                  <span class="badge badge-pill badge-secondary px-2 py-2 mx-1">5 Star</span>
                  </div>
                  <div className="col-12" style={{paddingLeft:0}}>
                    <p className="text-uppercase font-weight-bold">User Rating</p>
                  </div>
                  <div className="col-12" style={{fontSize:"16px"}}>
                  <span class="badge badge-pill badge-secondary px-3 py-2 mx-1">3 & Above</span>
                  <span class="badge badge-pill badge-secondary px-3 py-2 mx-1">4 & Above</span>
                  <span class="badge badge-pill badge-secondary px-3 py-2 mx-1">4.5 & Above</span>
                  </div>
                  <div className="col-12" style={{paddingLeft:0}}>
                    <p className="text-uppercase font-weight-bold">Property Type</p>
                  </div>
                  <div className="col-12" style={{fontSize:"17px"}}>
                  <span class="badge badge-pill badge-secondary px-3 py-2 mx-1">Hotel</span>
                  <span class="badge badge-pill badge-secondary px-3 py-2 mx-1">Home Stay</span>
                  <span class="badge badge-pill badge-secondary px-3 py-2 mx-1">Guest House</span>
                  <span class="badge badge-pill badge-secondary px-3 py-2 mx-1 my-2">Apartment</span>
                  </div>
                </div>
              <div class="foter d-flex justify-content-end">
               <button type="button" style={{borderRadius:"10px",border:"none",  background: "linear-gradient(#92b2fd, #ad7ffb, #f594b7)",color:"white",padding:"8px" ,width:"100%"}} className="font-weight-bold">Apply Filters</button>
              </div>
            
          </div>
         
          </div>
      <div className="container">
        <div className="row">
          <Link  to="/desc" style={{textDecoration:"none",color:"black"}}>
          <div className=" col-sm-5 col-md-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={room1} className="card-img-top" alt="..." />
              <div className="d-flex justify-content-between">
              <a href="/#" style={{color:"green",fontWeight:"bold"}}>
                <FcApproval /> Verified
              </a>
              <button type="button" className="mt-1 mr-3 btun"> 4.5</button>
              </div>

              <div className="card-body">
                <div className="d-flex d2 justify-content-between" >
                  <h5 className="card-title">ITC Hotel</h5>
                  <h4 style={{fontSize:"17px"}}>&#x20B9; 3700 / night</h4>
                </div>
                <p className="card-text">JBS Haldane Ave KOL</p>
                <div className="d-flex d1">
                  <h5>
                    <i className="fal fa-bed"></i> 4 Beds
                  </h5>
                  <h5>
                    <i className="fal fa-bath ml-2" ></i> 2 Baths
                  </h5>
                  <i class="far fa-thumbs-up ml-auto mr-2"></i>
                  <i class="far fa-thumbs-down"></i>
                </div>
              </div>
            </div>
          </div>
          </Link>
          <div className=" col-sm-5 col-md-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={room2} className="card-img-top" alt="..." />
              <div className="d-flex justify-content-between">
              <a href="/#" style={{color:"green"}}>
                <FcApproval /> Verified
              </a>
              <button type="button" className="mt-1 mr-3 btun">5.0</button>
              </div>

              <div className="card-body">
                <div className="d-flex d2 justify-content-between">
                  <h5 className="card-title">JW Mariott</h5>
                  <h4 style={{fontSize:"17px"}}>&#x20B9; 4000 / night</h4>
                </div>
                <p className="card-text"> 4A,JBS Haldane Ave KOL</p>
                <div className="d-flex d1">
                  <h5>
                    <i className="fal fa-bed"></i> 3 Beds
                  </h5>
                  <h5>
                    <i className="fal fa-bath ml-2"></i> 3 Baths
                  </h5>
                  <i class="far fa-thumbs-up ml-auto mr-2"></i>
                  <i class="far fa-thumbs-down"></i>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-sm-5 col-md-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={room4} className="card-img-top" alt="..." />
              <div className="d-flex justify-content-between">
              <a href="/#" style={{color:"green"}}>
                <FcApproval /> Verified
              </a>
              <button type="button" className="mt-1 mr-3 btun"> 4.4</button>
              </div>

              <div className="card-body">
                <div className="d-flex d2 justify-content-between">
                  <h5 className="card-title">Oberoi Grand</h5>
                  <h4 style={{fontSize:"17px"}}>&#x20B9; 3500 / night</h4>
                </div>
                <p className="card-text">15,Jawaharlal Neheru Rd KOL</p>
                <div className="d-flex d1">
                  <h5>
                    <i className="fal fa-bed"></i> 4 Beds
                  </h5>
                  <h5>
                    <i className="fal fa-bath ml-2"></i> 2 Baths
                  </h5>
                  <i class="far fa-thumbs-up ml-auto mr-2"></i>
                  <i class="far fa-thumbs-down"></i>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-sm-5 col-md-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={room5} className="card-img-top" alt="..." />
              <div className="d-flex justify-content-between">
              <a href="/#" style={{color:"green"}}>
                <FcApproval /> Verified
              </a>
              <button type="button" className="mt-1 mr-3 btun"> 4.2</button>
              </div>

              <div className="card-body">
                <div className="d-flex d2 justify-content-between">
                  <h5 className="card-title">Vivanta</h5>
                  <h4 style={{fontSize:"17px"}}>&#x20B9; 2500 / night</h4>
                </div>
                <p className="card-text">1930, Rajdanga Main Rd E.M Bypass KOL </p>
                <div className="d-flex d1">
                  <h5>
                    <i className="fal fa-bed"></i> 4 Beds
                  </h5>
                  <h5>
                    <i className="fal fa-bath ml-2"></i> 3 Baths
                  </h5>
                  <i class="far fa-thumbs-up ml-auto mr-2"></i>
                  <i class="far fa-thumbs-down"></i>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-sm-5 col-md-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={room6} className="card-img-top" alt="..." />
              <div className="d-flex justify-content-between">
              <a href="/#" style={{color:"green"}}>
                <FcApproval /> Verified
              </a>
              <button type="button" className="mt-1 mr-3 btun">5.0</button>
              </div>

              <div className="card-body">
                <div className="d-flex d2 justify-content-between">
                  <h5 className="card-title">Hayatt Regency</h5>
                  <h4 style={{fontSize:"17px"}}>&#x20B9; 10000 / night</h4>
                </div>
                <p className="card-text">JA-1 Sector III, Salt Lake City KOL</p>
                <div className="d-flex d1">
                  <h5>
                    <i className="fal fa-bed"></i> 4 Beds
                  </h5>
                  <h5>
                    <i className="fal fa-bath ml-2"></i> 3 Baths
                  </h5>
                  <i class="far fa-thumbs-up ml-auto mr-2"></i>
                  <i class="far fa-thumbs-down"></i>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-sm-5 col-md-4 py-3 py-sm-0">
            <div className="card box-shadow">
              <img src={room3} className="card-img-top" alt="..." />
              <div className="d-flex justify-content-between">
              <a href="/#" style={{color:"green"}}>
                <FcApproval /> Verified
              </a>
              <button type="button" className="mt-1 mr-3 btun">4.6</button>
              </div>

              <div className="card-body">
                <div className="d-flex d2 justify-content-between">
                  <h5 className="card-title">The Lalit Great Eastern</h5>
                  <h4 style={{fontSize:"17px"}}>&#x20B9; 7000 / night</h4>
                </div>
                <p className="card-text">1,2,3, Old Court House Street,Dalhousie Square KOL</p>
                <div className="d-flex d1">
                  <h5>
                    <i className="fal fa-bed"></i> 4 Beds
                  </h5>
                  <h5>
                    <i className="fal fa-bath ml-2"></i> 2 Baths
                  </h5>
                  <i class="far fa-thumbs-up ml-auto mr-2"></i>
                  <i class="far fa-thumbs-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
                
    </>
      
  );
};
export default Listview;
