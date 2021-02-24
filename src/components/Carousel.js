import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Btn from "./Buttons";
import pic1 from "../images/pic38.jpg";
import pic2 from "../images/pic35.jpg";
export default class Carouseldemo extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-12 col-sm-12 col-md-12">
              <Carousel style={{ height: "auto"}}>
                <Carousel.Item>
                  <img
                    style={{ height: "100vh"}}
                    className="d-block w-100"
                    src={pic1}
                    alt="image1"
                  />

                  <Carousel.Caption className="text-white" >
                    
                      <h3>
                        Converting every <br /> Transaction into relationship{" "}
                      </h3><br /><br /> <br />  <br /> <br /><br />
                      <Btn />
                  </Carousel.Caption>
                  
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    style={{ height: "100vh" }}
                    className="d-block w-100"
                    src={pic2}
                    alt="image2"
                  />

                  <Carousel.Caption className="text-white">
                   
                      <h3>
                      Stay with us and <br /> Find best deals <br /> on every stay {" "}
                      </h3><br /><br /> <br />  <br /> <br /><br />
                    <Btn />
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}