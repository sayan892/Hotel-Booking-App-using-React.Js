import React from "react";
import styled from 'styled-components';
import logo from '../animations/Pinpoinx.png'
import "../App.css";
import { useHistory, Link } from "react-router-dom";
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

const Mainpage = () => {
  const history = useHistory();
  const welcome = () => history.push("wel");

  return (
    <> 
       <div class="container bg-color " style={{height:"850px"}}>
       <a class="signin-logo" href="/#"> 
            <img src={logo}
                width="170" height="150" alt="" /> 
            </a> 
  
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <h2 className="welcome_to_pinpoinx"> Welcome</h2>
              <ToggleGroup />
            <p className="text1">
              Please Sign in to continue...
            </p>
          
          </div>
      </div>
        <form>
 
          <div class="form-group">
            <label for="email" class="email2">
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="xyz@gmail.com"             name="email"
            />
          </div>
          <div class="form-group">
            <label for="pwd" class="password">
          
            </label>
            <input 
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <h3 class="forgot-password">Forgot Password?</h3>
          <button onClick={welcome} type="submit" class=" btn-info signinbtn">
            SIGN-IN
          </button>
        </form>
        <h3 class="forget-password1">
          Don't have account?{" "}
          <span class="new-account">
            <Link to="/signup" class="create_new">Create new account</Link>
          </span>
        </h3>

        <h6 class="or">OR</h6>
        
      
      <button type="button" class="btn-primary1"> Sign In with Facebook<i class="fab fa-facebook-f"></i></button>
  <button type="button" class="btn-info1">  Sign In with Google<i class="fab fa-google"></i></button>
  </div>

    </>
  );
};
export default Mainpage;
