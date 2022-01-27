import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Blog from "../Blogs/Blog";

const ExploreBlogs = () => {
  const [blogPost, setBlogPost] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.filter((blog) => blog.approved === true);
        setBlogPost(remaining);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row ">
          {blogPost.map((blog) => (
            <Blog key={blog._id} blog={blog}></Blog>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExploreBlogs;
