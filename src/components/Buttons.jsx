import React  from 'react';
import { useHistory } from "react-router-dom";


const Btn = () => {
    const history = useHistory();
  const goLogin = () => history.push('signup');
   const Login = () => history.push('signin');
        return (
            <div >
                <button onClick={goLogin} type="button"  className="btn bt  btn-success d-block center-block "
                 style={{ margin: "auto",width:"80%",marginBottom:"1em" , backgroundColor:"#ad7ffb"}}>Create Account</button>
                <button onClick={Login} type="button" className="btn bt btn-success d-block center-block" style={{ margin: "auto",width:"80%",marginBottom:"1em" , backgroundColor:"#ad7ffb"}}>Login</button>
            </div>
        )
  
}

export default Btn;