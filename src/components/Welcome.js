import React from 'react'
import { useHistory} from "react-router-dom";
import logo from '../animations/Pinpoinx.png'
import Anime2 from '../images/Anime2.png';


const Welcome = () => {
    const history = useHistory();
    const homepage = () => history.push("home");
    return(
        <div className="row welcomebg" style={{height:"814px"}}>
            <a class="signin-logo" href="/#"> 
            <img src={logo}
                width="180" height="160" alt="" /> 
            </a> 
            <div className="W1">
           <img src={Anime2} alt="hotel" className="Welcomeimg"/> 
           <h1 className="title1">Welcome User!</h1>
           <h2 className="para1">
           We Compare Prices from 200+ sites to help you to find the Best Price.
           <br/><br/>
           Select a day, book your room.  Happy Journey.</h2> 
           </div>
           <button className="Welcomebtn"  onClick={homepage}>Get Started</button> 
    </div>
)}

export default Welcome
