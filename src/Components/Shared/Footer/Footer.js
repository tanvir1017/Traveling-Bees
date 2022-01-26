/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import facebook from "../../../Img/socialIcon/Facebook.png";
import linkedIn from "../../../Img/socialIcon/LinedIn.png";
import youtube from "../../../Img/socialIcon/youtube.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="container">
        <div className="row g-0">
          {/* Brand desc */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="logo text-start">
              <h2 className="brand_name">
                Travelling-<span className="part_of_brand_name">Bees</span>
              </h2>
              <p className="">
                Travelling Bees– Tourism is a major economic activity that has
                developed significantly over the years. ... In general terms,
                tourism is the movement of a person from one place to another to
                visit and mesmerize the beauty of that place or to have fun
              </p>
              <div className="social_icon ">
                <a href="#" target="_blink">
                  {" "}
                  <img className="img-fluid " src={facebook} alt="" />
                </a>
                <a href="#" target="_blink">
                  {" "}
                  <img className="img-fluid ms-3" src={linkedIn} alt="" />
                </a>
                <a href="#" target="_blink">
                  <img className="img-fluid ms-3" src={youtube} alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* Brand desc */}
          <div className="col-lg-3 col-md-6 col-12">
            <h5 className="course_category_heading">Important Link</h5>
            <div className="course_category_list">
              <ul className="">
                <li>About us</li>
                <li>Become a member</li>
                <li>Member ship policy</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer_columns col-12">
            <h5 className="course_category_heading">Important Link</h5>
            <div className="course_category_list">
              <ul className="">
                <li>About us</li>
                <li>Become a member</li>
                <li>Member ship policy</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer_columns col-12">
            <h5 className="course_category_heading">Important Link</h5>
            <div className="course_category_list">
              <ul className="">
                <li>About us</li>
                <li>Become a member</li>
                <li>Member ship policy</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="copyRightText">
              <p>Copyright &copy; 2022 Nur IT Institute. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
