import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../animations/Pinpoinx.png'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import room3 from '../images/room3.jpg';
import room2 from '../images/room2.jpg';
import room7 from '../images/room7.jpg';
import room5 from '../images/room5.jpg';
import room6 from '../images/room6.jpg';
import room1 from '../images/room1.jpg';
import kol from '../images/kol.jpg';
import del from '../images/indiagate.jpg';
import mum from '../images/mumbai.jpg';
import bang from '../images/bangalore.jpg';
import chenn from '../images/chennai.jpg';
import pun from '../images/pune.jpg';
import h2 from '../images/hotel1.jpg';
import h3 from '../images/hotel2.png';
import h4 from '../images/hotel3.jpg';
import { BiTask} from "react-icons/bi";
const Homepage = () => {
    const [selectDate,setDate] = useState(null)
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
   
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0"
      }
    return(
        <>
             
              <nav className="navbar navbar-expand-sm  bg-color curve  " style={{height:"150px"}}>
                <a class="navbar-brand1" href="/#"> 
                    <img src={logo}
                        width="100" height="100" alt="" /> 
                </a> 
              <button className="butn" onClick={openNav}><i className="fas fa-bars"></i></button>
              <div id="mySidenav" class="sidenav">
              <img src={logo} className="img_change" width="100" height="100" alt="" /> 
                <button className="closebtn butn" onClick={closeNav}>&times;</button>
                <hr/>
                <a href="/#"><i class="fas fa-hotel mr-2"></i> Hotels</a>
                <a href="/#"><i className="fas fa-user mr-3"></i>My Profile</a>
                <a href="/#"> <i className="fas fa-heart mr-2"></i> Saved</a>
                <a href="/#" style={{fontSize:"20px"}}><BiTask className="mr-2" /> My Bookings</a>
              
                <a href="/#"><i class="fas fa-cog mr-2"></i> Settings</a>
                <a href="/#"><i class="fas fa-language mr-1"></i> Choose Language</a>
                <hr/>
             
                <a href="/#">Privacy Policy</a>
                <a href="/#"><i class="fas fa-star-half-alt mr-2"></i> Rate Us</a>
                <a href="/#"><i class="fas fa-phone-alt mr-2"></i> Contact</a>
                <hr/>
                <a href="/#"><i class="fas fa-sign-out-alt mr-1"></i>Sign Out</a>
               
                <h6 className="highlight">~ Version 2.1 ~</h6>
             </div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
               <a href="/#" className="nav-link"><i className="fas fa-bell"></i></a>
                </li>
            </ul>
            </nav>
            <div class="input-group  input">
            
            <div class="input-group-prepend">
                <button class="btn btn-light ml-3" type="submit"><i className="fas fa-search"></i></button>
            </div>
            <input type="search" class="form-control" placeholder="Enter city or place"/>
            <div class="input-group-append">
                <button class="btn btn-light mr-3" type="button"><i class="fal fa-microphone"></i></button>
            </div>
            </div>
  
            <div className="d-flex ml-5">
                       <DatePicker selected={selectDate} 
                                    onChange={date => setDate(date)}
                                     dateFormat='dd/MM/yyyy'
                                     minDate={new Date()}
                                     isClearable
                                     placeholderText='Check-in'
                                     showYearDropdown/>
                                         <button type="button" className="bor1">Availability</button>
                                     </div>
        <div className="container mt">
                  <div className="row flex-row flex-nowrap  overflow-auto">
                  <div className="col-3 col-sm-2 col-md-1">
                          <button type="button" className="bty"><i class="fal fa-location"></i></button>
                          <h6>Near By</h6>
                      </div>
                      <div className="col-3 col-sm-2 col-md-1">
                          <a href="/#"><img src={kol} className="imgy" alt="place"></img></a>
                          <h6>Kolkata</h6>
                      </div>
                      <div className="col-3 col-sm-2 col-md-1">
                          <a href="/#"><img src={del} className="imgy" alt="place"></img></a>
                          <h6 className="ml-2">Delhi</h6>
                      </div>
                      <div className="col-3 col-sm-2 col-md-1">
                          <a href="/#"><img src={mum} className="imgy" alt="place"></img></a>
                          <h6>Mumbai</h6>
                      </div>
                      <div className="col-3 col-sm-2 col-md-1">
                          <a href="/#"><img src={bang} className="imgy" alt="place"></img></a>
                          <h6>Bangalore</h6>
                      </div>
                      <div className="col-3 col-sm-2 col-md-1">
                          <a href="/#"><img src={chenn} className="imgy" alt="place"></img></a>
                          <h6>Chennai</h6>
                      </div>
                      <div className="col-3 col-sm-2 col-md-1">
                          <a href="/#"><img src={pun} className="imgy" alt="place"></img></a>
                          <h6 className="ml-2">Pune</h6>
                      </div>
                  </div>
             
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 ">
            <div id="demo" className="carousel slide" data-ride="carousel">
 


                    <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={room6} alt="hotel" className="rounded"/>
                        <div className="row rt ml-5">
                            <div className=" col-11 col-sm-10 col-md-10">
                            <div className="card">
                                <div className="card-body">
                                <div className="d-flex d2 justify-content-between">
                                <h5 className="card-title">&#x20B9; 5000</h5>
                                <button type="submit" className="bt1"><i class="fas fa-location-arrow"></i></button>
                                </div>
                                <h5 style={{color:"coral"}}>Queen Palace</h5>
                                <div className="card-text">
                                    <h6><i class="fas fa-map-marker-alt mr-2" style={{color:"yellow"}}></i>49/2 Jeffrey Rd Mumbai</h6>
                                    <div className="d-flex">
                                    <i class="fas fa-star" style={{color:"#FDCC0D"}}></i> <i class="fas fa-star" style={{color:"#FDCC0D"}}></i> <i class="fas fa-star" style={{color:"#FDCC0D"}}></i> <i class="fal fa-star mr-2"></i> <h6>4.0</h6>
                                     <p  className="ml-auto d-none d-sm-block d-md-block" style={{color:"grey",fontSize:"12px"}}>1652 reviews</p>
                                    </div>
                                      
                                    </div>
                                </div>
                            
                           
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={room5} alt="hotel"  className="rounded"/>
                        <div className="row rt ml-5">
                            <div className=" col-11 col-sm-10 col-md-10">
                            <div className="card">
                                <div className="card-body">
                                <div className="d-flex d2 justify-content-between">
                                <h5 className="card-title"> &#x20B9; 2000</h5>
                                <button type="submit" className="bt1"><i class="fas fa-location-arrow"></i></button>
                                </div>
                                <h5 style={{color:"coral"}}>Altera Resort</h5>
                                <div className="card-text">
                                    <h6><i class="fas fa-map-marker-alt mr-2" style={{color:"yellow"}}></i>56/2 Johnson Ave Delhi</h6>
                                    <div className="d-flex">
                                    <i class="fas fa-star" style={{color:"#FDCC0D"}}></i> <i class="fas fa-star" style={{color:"#FDCC0D"}}></i> <i class="fas fa-star" style={{color:"#FDCC0D"}}></i> <i class="fal fa-star mr-2"></i> <h6>4.5</h6>
                                     <p  className="ml-auto d-none d-sm-block d-md-block" style={{color:"grey",fontSize:"12px"}}>2652 reviews</p>
                                    </div>
                                      
                                    </div>
                                </div>
                            
                           
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span><i class="fas fa-chevron-right middle"></i></span>
                    </a> 
                    </div>
                    </div>
                    </div>
                   
                                     
                    <div className="rw">
                    <h6 className=" mb-3 bold d-md-none">Limited Time Offers</h6>
                  <div className="row flex-row flex-nowrap  overflow-auto mb-3 d-md-none">
                  
                      <div className="col-12">
                          <a href="/#"><img src={h4} className="rounded" style={{height:"200px",width:"100%"}} alt="hotel"></img></a>
                      </div>
                      <div className="col-12">
                          <a href="/#"><img src={h2}  className="rounded" style={{ height:"100%",width:"100%"}} alt="hotel"></img></a>
                      </div>
                      <div className="col-12">
                          <a href="/#"><img src={h3}  className="rounded" style={{height:"100%",width:"100%"}} alt="hotel"></img></a>
                      </div>
                  </div>
                  </div>
                  
                  
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6">
                                <h5 style={{color:"black",fontSize:"17px"}}>Top Hotels in india</h5>
                            </div>
                            <div className=" col-6 col-sm-6 col-md-6 d-flex justify-content-end">
                                <a href="/#" style={{color:"coral"}}>See all</a>
                            </div>
                        </div>
                    
                   
                        <div className="row flex-row flex-nowrap overflow-auto">
                                <div className=" col-6 col-sm-5 col-md-4 py-3  py-sm-0">
                                <div className="card ">
                                    <img src={room1} alt="hotel" className="card-img-top rounded"/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h6>Jw Marriott</h6>
                                        </div>
                                        <div className="card-text">
                                            <h6>E.M Bypass KOL</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-6 col-sm-5 col-md-4 py-3 py-sm-0">
                                <div className="card">
                                    <img src={room2} alt="hotel" className="card-img-top rounded"/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h6>Great Eastern</h6>
                                        </div>
                                        <div className="card-text">
                                            <h6>DH Road MUM</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-6 col-sm-5 col-md-4 py-3 py-sm-0">
                                <div className="card">
                                    <img src={room3} alt="hotel" className="card-img-top rounded"/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h6>ITC Sonar</h6>
                                        </div>
                                        <div className="card-text">
                                            <h6>MG Rd DEL</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-6 col-sm-5 col-md-4 py-3 py-sm-0">
                                <div className="card mb-5">
                                    <img src={room7} alt="hotel" className="card-img-top rounded"/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h6>Hayatt Regency</h6>
                                        </div>
                                        <div className="card-text">
                                            <h6>BMPB Rd HYD</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
            </div>
         
            <nav className="nav">
            <a href="/#" className="nav__link">
                <i className="fas fa-home"  style={{fontSize:"15px"}}></i>
                <span className="nav__text">Home</span>
            </a>
            <Link to="/maps" className="nav__link">
                <i className="fas fa-map-marker-alt"  style={{fontSize:"15px"}}></i>
                <span className="nav__text">Map</span>
            </Link>
            <Link to="/list" className="nav__link">
                <i className="fas fa-heart" style={{fontSize:"15px"}}></i>
                <span className="nav__text">Saved</span>
            </Link>
            <Link to="/profile" className="nav__link">
                <i className="fas fa-user"  style={{fontSize:"15px"}}></i>
                <span className="nav__text">Profile</span>
            </Link>
            </nav>
        </>

    )
}
export default Homepage;