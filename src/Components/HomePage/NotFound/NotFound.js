import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../../../Img/course_content/404.gif";
import "./Notfound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row notFoundRow">
        <div className="d-flex justify-content-center align-items-center col-12">
          <img src={notFoundImg} className="img-fluid w-75" alt="" />
        </div>
        <div className="homeNavigate">
          <Link to="/home" className="">
            হোম এ ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
