import React, { Component } from "react";
import Slider from "react-slick";
import brandLogo from "../../../Img/course_content/logo.png";
import "./HeadingSlider.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <div className="Heading_slider_wrapper">
            <img src={brandLogo} alt="" />
      </div>
        <Slider {...settings}>
          
          <div className="slider_wrapper">
            
              <img className="img-fluid w-100" src="https://demos.jeweltheme.com/alpena/images/banner/1.jpg" alt="" />
          <div className="overly"></div>
            <div className="slider_text">
              <span>Life style</span>
              <h1>Summer Paradise</h1>
              <small>March 17-2021</small>
          
            </div>
          </div>
          <div className="slider_wrapper">
            <img className="img-fluid w-100" src="https://demos.jeweltheme.com/alpena/images/banner/2.jpg" alt="" />
            <div className="overly"></div>
            <div className="slider_text">
              <span>Life style</span>
              <h1>Summer Paradise</h1>
              <small>March 17-2021</small>
          </div>
          </div>
          <div className="slider_wrapper">
            <img className="img-fluid w-100" src="https://demos.jeweltheme.com/alpena/images/banner/3.jpg" alt="" />
            <div className="overly"></div>
            <div className="slider_text">
              <span>Life style</span>
              <h1>Summer Paradise</h1>
              <small>March 17-2021</small>
          </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}