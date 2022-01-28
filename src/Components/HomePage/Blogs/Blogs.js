import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import theTraveler from "../../../Img/course_content/The.png";
import Blog from "./Blog";
import "./Blogs.css";

const Blogs = () => {
  const [blogPost, setBlogPost] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = parseInt(6);
  useEffect(() => {
    fetch(
      `https://peaceful-castle-84704.herokuapp.com/blogs?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.result.filter((blog) => blog.approved === true);
        setBlogPost(remaining);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page, size]);

  return (
    <div className="container  blog_wrapper">
      <div className="blog_title mb-5">
        <img src={theTraveler} alt="" />
      </div>
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
      <div className="explore_btn">
        <Link to="/explore-blogs" className="default_btn">
          See More Blogs
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
