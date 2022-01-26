import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginImg from "../../Img/registation Img/registation-Img2.png";
import UseAuth from "../Hooks/UseAuth";
import Navbar from "../Shared/Navbar/Navbar";
import "./Registation.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignUp, error, signIn, isLoading } = UseAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(loginData.email, loginData.password, location, navigate);
  };
  const logInInputField = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newLogin = { ...loginData };
    newLogin[name] = value;
    setLoginData(newLogin);
  };
  return (
    <>
      <Navbar />
      <div className="container login_container">
        <div className="row">
          <div className="login_img_side col-lg-6 col-md-12 col-12 p-3">
            <img className="img-fluid w-100" src={LoginImg} alt="" />
          </div>
          <div className="login_input_side col-lg-6 col-md-12 col-12 p-3">
            <div className="mt-3 d-flex justify-content-between">
              <div>
                <Link to="/" className="navbar-brand" alt="">
                  <h2 className="text-white brand_name">
                    Traveling-<span className="part_of_brand_name">Bees</span>
                  </h2>
                </Link>
              </div>
              <div className="signup_text_from_login">
                <span>
                  I haven't any account !
                  <Link to="/signUp" className="ms-2">
                    Create account{" "}
                  </Link>
                </span>
              </div>
            </div>

            <div className="px-4">
              <div className="text-start login_text ">
                <h2>Login</h2>
                <small className="login_hints_text">
                  <span className="mx-2">
                    <i className="fas fa-info-circle"></i>
                  </span>{" "}
                  Use your existing gmail id that your entered
                </small>
              </div>
              {!isLoading && (
                <form onSubmit={handleLogin} className="loginForm ">
                  <input
                    onBlur={logInInputField}
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    onBlur={logInInputField}
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <div
                    className=" text-start fst-italic"
                    style={{
                      color: "#ff676c",
                      marginLeft: "20px",
                      marginTop: "5px",
                    }}
                  >
                    Forgotten password?
                  </div>
                  <div className="signup_text_from_login_bottom">
                    <span>
                      I haven't any account !
                      <Link to="/signUp" className="ms-2">
                        create an account{" "}
                      </Link>
                    </span>
                  </div>

                  <p className="text-danger">{error}</p>
                  <div className="text-start">
                    <button type="submit" className=" submit_btn">
                      Submit
                    </button>
                    <button
                      type="button"
                      className=" submit_btn"
                      onClick={() => googleSignUp(location, navigate)}
                    >
                      Google
                    </button>
                  </div>
                </form>
              )}
              {isLoading && (
                <img
                  className="img-fluid w-100"
                  src="https://spaceiq.com/wp-content/themes/moovweb-space-iq/assets/images/preloader.gif"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
