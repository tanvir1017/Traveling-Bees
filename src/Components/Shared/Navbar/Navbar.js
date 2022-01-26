/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import login from "../../../Img/Icons/login.png";
import menu from "../../../Img/Icons/menu.png";
import LoginUser from "../../../Img/Icons/user.png";
import facebook from "../../../Img/socialIcon/Facebook.png";
import insta from "../../../Img/socialIcon/insta.png";
import linkedin from "../../../Img/socialIcon/LinedIn.png";
import pInterset from "../../../Img/socialIcon/pInterest.png";
import youtube from "../../../Img/socialIcon/youtube.png";
import UseAuth from "../../Hooks/UseAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = UseAuth();
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light ">
        <div className="container">
          <button
            className="handBarger_menu_btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="handBarger_menu">
              <img src={menu} alt="" />
            </span>
          </button>
          <div
            className="collapse navbar-collapse navbar-collapse-md"
            id="navbarText"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="d-flex justify-content-center align-items-center nav-item">
                <Link to="/" className="nav-link active  all_courses" alt="">
                  Home
                </Link>
              </li>
              <li className="d-flex justify-content-center align-items-center nav-item">
                <Link to="/" className="nav-link active  all_courses" alt="">
                  Archives
                </Link>
              </li>
              <li className="d-flex justify-content-center align-items-center nav-item">
                <Link to="/" className="nav-link active  all_courses" alt="">
                  Features
                </Link>
              </li>
              <li className="d-flex justify-content-center align-items-center nav-item">
                <Link to="/" className="nav-link active  all_courses" alt="">
                  About
                </Link>
              </li>
              <li className="d-flex justify-content-center align-items-center nav-item">
                <Link to="/" className="nav-link active  all_courses" alt="">
                  Contact
                </Link>
              </li>
              <li className="d-flex justify-content-center align-items-center nav-item">
                <Link
                  to="/dashboard/home"
                  className="nav-link active  all_courses"
                  alt=""
                >
                  Dashboard
                </Link>
              </li>
              <li className="d-flex justify-content-center align-items-center nav-item">
                {user.email ? (
                  <span
                    onClick={logout}
                    className="nav-link active  registation_nav"
                    alt=""
                  >
                    Log out
                    <img className="img-fluid ms-2" src={login} alt="" />
                  </span>
                ) : (
                  <Link
                    to="/logIn"
                    className="nav-link active  registation_nav"
                    alt=""
                  >
                    Login / Sign up
                    <img className="img-fluid" src={login} alt="" />
                  </Link>
                )}
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="d-flex justify-content-center align-items-center nav-item">
                <img src={facebook} className="ms-2 social_nav_img" alt="" />
                <img src={linkedin} className="ms-2 social_nav_img" alt="" />
                <img src={pInterset} className="ms-2 social_nav_img" alt="" />
                <img src={insta} className="ms-2 social_nav_img" alt="" />
                <img src={youtube} className="ms-2 social_nav_img" alt="" />
              </li>
              {user.photoURL ? (
                <li className="ms-4 nav-item nav_item_pic">
                  <img src={user.photoURL} className="user_photo" alt="" />
                </li>
              ) : (
                <li className="ms-4 nav-item Without_login_img">
                  <img src={LoginUser} className="user_photo" alt="" />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
