import React  from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Lakshay from "../images/Lakshay.jpg";
import { BiTask} from "react-icons/bi";
import logo from '../animations/Pinpoinx.png'
import { useState } from "react";
const Button = styled.button`
background: linear-gradient(to right, #8adcff, #12668a);
color:white;
border-radius: 15px;
border: 0;
margin: 20px;
`;
const ButtonToggle = styled(Button)`
${({active})=> 
active &&
 `
`}
`
const types = [''];
function ToggleGroup (){
  const [active, setActive] = useState(types[0]);
  return <div class="edit-button">
  {types.map(type => (
    <ButtonToggle 
    key={type}
    active={active === type}
    onClick={() => setActive(type)}
    >{type}  <i class="far fa-edit"></i></ButtonToggle>
  ))}
  </div>
}

const Profile = () => {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
  }
    const myHandler = (e) => {
      document.querySelector('.progress-button').classList.add('in-progress');

      const documentStyles = document.documentElement.style;
    const percentage = document.querySelector('.percentage');

    (async () => {
        let progress = 0;

        while (progress < 75) {
            progress = await simulateDownload(progress);

            if (progress % 5 === 0) {
                documentStyles.setProperty('--progress', `${progress}%`);
            }

            percentage.innerText = `${progress}%`;
        }
    })();

  }
  const simulateDownload = (progress) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(progress + 1);
        }, 50);
    }).then(res => res);
};
    return (
      <>
        <div className="container-fluid bg-color" style={{height:"150px"}}>
        <div className="row">          
                <div className=" col-6 col-md-6 col-sm-6">
                <button className="butn" onClick={openNav}><i className="fas fa-bars"></i></button>
              <div id="mySidenav" class="sidenav">
              <img src={logo} className="img_change" width="100" height="100" alt="" /> 
                <button className="closebtn butn" onClick={closeNav}>&times;</button>
                <hr/>
                <Link to="/home"><i class="fas fa-home mr-2"></i>Home</Link>
                <a href="/#"><i className="fas fa-user mr-3"></i>My Account</a>
                <a href="/#"> <i className="fas fa-heart mr-2"></i> Wishlist</a>
                <a href="/#" style={{fontSize:"20px"}}><BiTask className="mr-2" /> My Bookings</a>
                <a href="/#"><i class="fas fa-phone-alt mr-2"></i> Contact</a>
                <a href="/#"><i class="fas fa-cog mr-2"></i> Settings</a>
                <a href="/#"><i class="fas fa-star-half-alt mr-2"></i> Rate Us</a>
                <a href="/#"><i class="fas fa-language mr-1"></i> Choose Language</a>
                <hr/>
                <a href="/#">Help Centre</a>
                <a href="/#">Privacy Policy</a>
                <a href="/#">Legal Policies</a>
                <hr/>
                <a href="/#"><i class="fas fa-sign-out-alt mr-1"></i>Sign Out</a>
                <h6 className="highlight">~ Version 2.1 ~</h6>
             </div>
            <img src={Lakshay} className="photo1 " alt="Cinque Terre" />
          </div>  
          <div className="Username_profile">
          <div className="text-left" style={{color:"White"}} >
            <h4>Lakshay Gupta</h4>
            <div className=" col-6 col-sm-6 col-md-6 d-flex user  justify-content-start">
             <p className="text-right" style={{color:"White" }}>So123</p></div>
            </div>
            </div>
            </div>
            <ToggleGroup />
            <div class="progress-button">
            <span class="loading-text"></span>
            <button class="download-button" onClick={myHandler}>
            <span class="button-text">Tap to View Progress</span>
            </button>
            <span class="percentage">0%</span>
        </div>

            
              <table className="table" style={{color:"white"}}>
                        <tr>
                            <th className= "tclass">14</th>  
                              <br />
                            <th className= "hclass">123</th> 

                        </tr>
                        <tr>
                       <td className= "tclass">Hotels saved </td>   
                              |
                            <td className= "tclass">Hotel viewed</td>
                        </tr>
                    </table>  
                <p className="Personal_info" style={{color:"#9c80b1"}}>Personal Details</p>
                <div className="profile_form">
                <form>
                <div class="form-group" >
                <label for="disabledInput" class="col-sm-2 control-label" style={{color:"#9c80b1"}}>USERNAME</label>
               <div class="col-sm-10">
               <input class="form-control" id="disabledInput" type="text" placeholder="Lakshay Gupta" disabled>
              </input></div></div>
              <div class="form-group">
                <label for="disabledInput" class="col-sm-2 control-label" style={{color:"#9c80b1"}}>EMAIL</label>
               <div class="col-sm-10">
               <input class="form-control" id="disabledInput" type="text" placeholder="Lakshay@gmail.com" disabled>
              </input></div></div>
              <div class="form-group">
                <label for="disabledInput" class="col-sm-2 control-label" style={{color:"#9c80b1"}}>COUNTRY</label>
               <div class="col-sm-10">
               <input class="form-control" id="disabledInput" type="text" placeholder="USA" disabled>
              </input></div></div>
              <div class="form-group">
                <label for="disabledInput" class="col-sm-2 control-label" style={{color:"#9c80b1"}}>PHONE NUMBER</label>
               <div class="col-sm-10">
               <input class="form-control" id="disabledInput" type="text" placeholder="+1-933332244244" disabled>
              </input></div></div>
            <p><button className="plusbutton">+</button></p> 

          </form>
          </div></div>
         
          </>
         );
       };
export default Profile;
       

       