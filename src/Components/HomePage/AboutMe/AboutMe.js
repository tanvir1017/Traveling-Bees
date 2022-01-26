import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-12">
          <div className="slider_wrapper">
            <img
              className="img-fluid"
              src="https://demos.jeweltheme.com/alpena/images/cat.jpg"
              alt=""
            />
            <div className="overly_dark"></div>
            <div className="slider_text_about_me">
              <span>Life style</span>
              <h1>Summer Paradise</h1>
              <small>March 17-2021</small>
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-12"></div>
        <div className="col-lg-3 col-md-5 col-12">
          <div className="about_me_wrapper">
            <div className="about_me_wrapper_hr"></div>
            <h6>About Me</h6>
            <div className="about_me_img">
              <img
                className="img-fluid"
                src="https://demos.jeweltheme.com/alpena/images/sidebar/1.jpg"
                alt=""
              />
            </div>
            <div className="about_me_text">
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor. Read More
              </p>
            </div>
            <div className="keep_in_touch">
              <div className="hr_div"></div>
              <span>Keep in touch</span>
              <div className="social_icons">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-pinterest"></i>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-soundcloud"></i>
                <i className="fa fa-envelope-o"></i>
                <i className="fa fa-rss"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
