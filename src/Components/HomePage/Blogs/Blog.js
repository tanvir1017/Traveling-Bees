import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const Blog = ({ blog }) => {
  const { _id, title, sub_desc, blog_cover, posted_time } = blog;
  return (
    <div className="col-lg-4 col-md-3 col-12  p-0">
      <div className="blog_columns">
        <img src={blog_cover} className="img-fluid" alt="" />
        <div className="blog_body">
          <div className="static_text">
            <h5>PHOTOGRAPHY</h5>
            <div className="share_icons">
              <i className="fa fa-share-alt"></i>
              <i className="ms-3 fa fa-heart"></i>
            </div>
          </div>

          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="blog_desc">
            <p>
              {sub_desc?.slice(0, 100)}{" "}
              <span className="">
                <Link to={`/blogs/${_id}`}>Read More...</Link>
              </span>
            </p>
          </div>
          <div className="blog_time_hr"></div>
          <div className="time_of_blog">
            <small className="fst-italic">
              <i class="far fa-clock me-2"></i>
              {posted_time}
            </small>
            <small>
              <i class="fa fa-envelope-o me-2" aria-hidden="true"></i> Leave a
              comment
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
