import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import { Router } from "react-router-dom";
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/popper.js/dist/popper'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Routes from "./routes";
import history from "./services/history";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <div>
        
      {loading ? (
        <Loading />
      ) : (
        
        <Router history={history}>
          <Routes />
          
        </Router>
       
      

          
      )}
   
    </div>
  );
}
export default App;
