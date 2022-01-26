import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import LoginImg from "../../Img/registation Img/registation-Img2.png";
import UseAuth from "../Hooks/UseAuth";
import Navbar from "../Shared/Navbar/Navbar";
import "./Registation.css";
const SignUp = () => {
  const [signUpData, setSignUpData] = useState({});
  const [num, setNum] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignUp, error, emailPasswordSignUp, isLoading } = UseAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.retype_password) {
      swal({
        title: "Please set the password correctly",
        text: "The password you given is not matched with Retype-password",
        icon: "error",
        button: "Opps!",
      });

      setNum(num + 1);
      // return;
    }
    emailPasswordSignUp(
      signUpData.email,
      signUpData.password,
      navigate,
      location,
      signUpData.name
    );
  };
  const logInInputField = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newLogin = { ...signUpData };
    newLogin[name] = value;
    setSignUpData(newLogin);
  };
  return (
    <>
      <Navbar />
      <div className="container login_container">
        <div className="row g-0">
          {/* Login illustration img side */}
          <div className="login_img_side col-lg-6 col-md-12 col-12 p-3">
            <img className="img-fluid w-100" src={LoginImg} alt="" />
          </div>
          {/* login input field side */}

          <div className="login_input_side col-lg-6 col-md-12 col-12 p-3">
            <div className="mt-3 d-flex justify-content-between">
              <div>
                <Link to="/" className="navbar-brand" alt="">
                  <h2 className="text-white brand_name">
                    Traveling-<span className="part_of_brand_name">Bees</span>
                  </h2>
                </Link>
              </div>
              <div className="signup_text_from_login signup_text_from_signup">
                <span>
                  I have an account !
                  <Link to="/logIn" className="ms-2">
                    Login{" "}
                  </Link>
                </span>
              </div>
            </div>
            <div className="px-4">
              <div className="text-start login_text ">
                <h2>Create an account</h2>
                <small className=" login_hints_text">
                  <span className="mx-2">
                    <i className="fas fa-info-circle"></i>
                  </span>{" "}
                  Use your gmail id for Sign in.
                </small>
              </div>

              {!isLoading && (
                <form onSubmit={handleSubmit} className="loginForm ">
                  <input
                    onBlur={logInInputField}
                    name="name"
                    type="text"
                    placeholder="Full name"
                    required
                  />
                  <input
                    onBlur={logInInputField}
                    name="email"
                    type="email"
                    placeholder="Gmail id"
                    required
                  />
                  <input
                    onBlur={logInInputField}
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <input
                    onBlur={logInInputField}
                    type="password"
                    placeholder="Re-type password"
                    required
                    name="retype_password"
                  />

                  <div className="signup_text_from_login_bottom">
                    <span>
                      আমার অ্যাকাউন্ট আছে !
                      <Link to="/logIn" className="ms-2">
                        লগইন{" "}
                      </Link>
                    </span>
                  </div>
                  <p className="text-start error">{error}</p>
                  <div className="text-start">
                    <button className=" submit_btn">সাবমিট</button>
                    <button
                      className=" submit_btn"
                      onClick={() => googleSignUp(location, navigate)}
                    >
                      গুগুল
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {isLoading && (
            <img
              className="img-fluid w-100"
              src="https://spaceiq.com/wp-content/themes/moovweb-space-iq/assets/images/preloader.gif"
              alt=""
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
