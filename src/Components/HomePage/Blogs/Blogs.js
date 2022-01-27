import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogPost, setBlogPost] = useState([]);
  const size = 6;
  useEffect(() => {
    fetch(`http://localhost:5000/blogs?size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.filter((blog) => blog.approved === true);
        setBlogPost(remaining);
      });
  }, []);

  return (
    <div className="container  blog_wrapper">
      <div className="blog_title mb-5">
        <img
          src="https://meridianthemes-demo.net/the-traveler/wp-content/themes/the-traveler/images/logo.png"
          alt=""
        />
      </div>
      <div className="row ">
        {blogPost.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
      <div className="explore_btn">
        <Link to="/explore-blogs" className="default_btn">
          See More Blogs
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
