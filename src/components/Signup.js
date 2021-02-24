import React from "react";
import "../App.css";
import logo from '../animations/Pinpoinx.png'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useState } from "react";
const Button = styled.button`
background-color: white;
color:blue;
padding 3px 45px;
border-radius: 15px;
border: 0;
outline: 0;
text-transform: uppercase;
cursor: pointer;
margin: 0px 0px  ;
&:disabled {
  cursor : default;
  opacity: 0.7;
}
`;
const ButtonToggle = styled(Button)`
opacity: 0.7;
${({active})=> 
active &&
 `
opacity:1
`}
`
const types = ['USER', 'AGENT'];

function ToggleGroup (){
  const [active, setActive] = useState(types[0]);
  return <div class="text-center">
  {types.map(type => (
    <ButtonToggle 
    key={type}
    active={active === type}
    onClick={() => setActive(type)}
    >{type}</ButtonToggle>
  ))}
 <p className="text5"></p>
  </div>
}

const Signup = () => {
  return (
    <>
      <div className="container ct bg-color "  style={{height:"850px"}}>
      <a class="signin-logo" href="/#"> 
            <img src={logo}
                width="170" height="150" alt="" /> 
            </a> 
        <div className="row">
          <div className=" col-12 col-sm-12 col-md-12">
            <h3 class="CreateAcc"> Create Account</h3>
            <p class="signinsingle1">Please sign-up to continue!</p>
          </div>
        </div>
        <ToggleGroup />
    
        <form>
          <div class="form-group">
            <label for="email" class="email2">
              
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Please Enter Full Name"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="pwd2" class="password">
            
            </label>
            <input
              type="email"
              class="form-control"
              id="pwd2"
              placeholder="Write your Email"
              name="pswd"
            />
          </div>

          <div class="form-group">
            <label for="pwd2" class="password">
              
            </label>
            <input
              type="password"
              class="form-control"
              id="pwd2"
              placeholder="Create New Password"
              name="pswd"
            />
          </div>
          <div class="form-group">
            <label for="pwd2" class="password">
              {" "}
              
            </label>
            <input
              type="password"
              class="form-control"
              id="pwd2"
              placeholder="Confirm password"
              name="pswd"
            />
          </div>
          <div class="form-check TandC">
  <input
    class="form-check-input"
    type="checkbox"
    value=""
    id="flexCheckDefault"
  />
  <label class="form-check-label" for="flexCheckDefault">
   I have read and accept the <span class="checkbox">Terms of Service<span class="and"> and </span> Privacy Policy
  </span>
  </label>
</div>

          <Link type="submit" to="/signin" class="signinbtn1">
            SIGN-UP
          </Link>
        </form>
        <h3 class="forget-password1">
          Already have an account?{" "}
          <span class="new-account">
            <Link to="/signin" class="new-account">Sign-in</Link>
          </span>
        </h3>
      </div>
    </>
  );
};
export default Signup;
