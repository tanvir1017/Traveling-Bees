import React from "react";
import halfSideImg1 from "../../../Img/course_content/bali2.png";
import finalImg1 from "../../../Img/course_content/finalImg1.png";
import finalImg2 from "../../../Img/course_content/finalImg2.png";
import finalImg3 from "../../../Img/course_content/finalImg3.png";
import finalImg4 from "../../../Img/course_content/finalImg4.png";
import finalImg8 from "../../../Img/course_content/finalImg6.png";
import finalImg7 from "../../../Img/course_content/finalImg7.png";
import galleryImg from "../../../Img/course_content/gallery.png";
import finalImg5 from "../../../Img/course_content/swijerland.png";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="container">
      <div className="gallery_wrapper">
        <div className="heading_title_gallery">
          <img src={galleryImg} className="img-fluid" alt="" />
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 gallery_img">
            <img className="img-fluid w-100" src={finalImg1} alt="" />
            <div className="gallery_text">
              <h2>Thailand</h2>
              <div className="tagline">
                <p>
                  Thailand tourism is thriving now more than ever thanks to its
                  temperate climate, stunning locales, good food and progressive
                  economy.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 gallery_img">
            <img className="img-fluid w-100" src={finalImg2} alt="" />
            <div className="gallery_text">
              <h2>Bali Indonesia</h2>
              <div className="tagline">
                <p>
                  Bali Indonesia tourism is thriving now more than ever thanks
                  to its temperate climate, stunning locales, good food and
                  progressive economy.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 gallery_img">
            <img className="img-fluid w-100" src={finalImg3} alt="" />
            <div className="gallery_text">
              <h2>Sanctuary Temple</h2>
              <div className="tagline">
                <p>
                  Sanctuary of Truth tourism is thriving now more than ever
                  thanks to its temperate climate, stunning locales, good food
                  and progressive economy.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-lg-4 gallery_img">
            <img src={finalImg5} className="img-fluid w-100" alt="" />
            <div className="gallery_text">
              <h2>Switzer Land</h2>
              <div className="tagline">
                <p>
                  Switzerland tourism is thriving now more than ever thanks to
                  its temperate climate, stunning locales, good food and
                  progressive economy.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 ">
            <img src={halfSideImg1} className="img-fluid w-100" alt="" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4 col-md-6 col-12 gallery_img">
            <img className="img-fluid w-100" src={finalImg4} alt="" />
            <div className="gallery_text">
              <h2>Historical Temp, china</h2>
              <div className="tagline">
                <p>
                  Switzerland tourism is thriving now more than ever thanks to
                  its temperate climate, stunning locales, good food and
                  progressive economy.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 gallery_img">
            <img className="img-fluid w-100" src={finalImg7} alt="" />
            <div className="gallery_text">
              <h2>Winter King, Kashmir</h2>
              <div className="tagline">
                <p>
                  Kashmir tourism is thriving now more than ever thanks to its
                  temperate climate, stunning locales, good food and progressive
                  economy.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 gallery_img">
            <img className="img-fluid w-100" src={finalImg8} alt="" />
            <div className="gallery_text">
              <h2>Golden Temple, China </h2>
              <div className="tagline">
                <p>
                  Golden Temple tourism is thriving now more than ever thanks to
                  its temperate climate, stunning locales, good food and
                  progressive economy.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
