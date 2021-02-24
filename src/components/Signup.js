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
  return <div className="text-center">
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
      <a className="signin-logo" href="/#"> 
            <img src={logo}
                width="170" height="150" alt="" /> 
            </a> 
        <div className="row">
          <div className=" col-12 col-sm-12 col-md-12">
            <h3 className="CreateAcc"> Create Account</h3>
            <p className="signinsingle1">Please sign-up to continue!</p>
          </div>
        </div>
        <ToggleGroup />
    
        <form>
          <div className="form-group">
            <label  className="email2">
              FULL NAME{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Please Enter Full Name"
              name="email"
            />
          </div>
          <div className="form-group">
            <label  className="password">
              EMAIL
            </label>
            <input
              type="email"
              className="form-control"
              id="pwd2"
              placeholder="Write your Email"
              name="pswd"
            />
          </div>

          <div className="form-group">
            <label  className="password">
              PASSWORD
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd2"
              placeholder="Create New Password"
              name="pswd"
            />
          </div>
          <div className="form-group">
            <label  className="password">
              {" "}
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              className="form-control"
              id="pwd2"
              placeholder="Confirm password"
              name="pswd"
            />
          </div>
          <div className="form-check TandC">
  <input
    className="form-check-input"
    type="checkbox"
    value=""
    id="flexCheckDefault"
  />
  <label className="form-check-label" for="flexCheckDefault">
   I have read and accept the <span className="checkbox">Terms of Service<span className="and"> and </span> Privacy Policy
  </span>
  </label>
</div>

          <Link type="submit" to="/signin" className="signinbtn1">
            SIGN-UP
          </Link>
        </form>
        <h3 className="forget-password1">
          Already have an account?{" "}
          <span className="new-account">
            <Link to="/signin" className="new-account">Sign-in</Link>
          </span>
        </h3>
      </div>
    </>
  );
};
export default Signup;
