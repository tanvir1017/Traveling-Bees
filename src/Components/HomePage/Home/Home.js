import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Blogs from "../Blogs/Blogs";
import HeadingSlider from "../HeadingSlider/HeadingSlider";
import LifestyleImg from "../LifestyleImg/LifestyleImg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeadingSlider />
      <LifestyleImg />
      <AboutMe />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
