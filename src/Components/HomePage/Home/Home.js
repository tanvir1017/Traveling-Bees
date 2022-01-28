import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../Contact/ContactUs";
import Gallery from "../Gallery/Gallery";
import HeadingSlider from "../HeadingSlider/HeadingSlider";
import LifestyleImg from "../LifestyleImg/LifestyleImg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeadingSlider />
      <LifestyleImg />
      <div id="about_me">
        <AboutMe />
      </div>{" "}
      <div id="blogs">
        <Blogs />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      {/* <div id="features">
        <Features />
      </div> */}
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
