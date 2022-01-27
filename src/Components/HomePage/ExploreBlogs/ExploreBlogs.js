import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Blog from "../Blogs/Blog";
import "./explore.css";

const ExploreBlogs = () => {
  const [blogPost, setBlogPost] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 8;
  useEffect(() => {
    fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.result.filter((blog) => blog.approved === true);
        setBlogPost(remaining);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row ">
          {blogPost.map((blog) => (
            <Blog key={blog._id} blog={blog}></Blog>
          ))}
        </div>
        <div className="pagination">
          {[...Array(pageCount).keys()].map((num) => (
            <button
              className={num === page ? "selected" : ""}
              key={num}
              onClick={() => setPage(num)}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExploreBlogs;
