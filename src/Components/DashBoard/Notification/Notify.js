import React from "react";
import { Link } from "react-router-dom";
import "./Notify.css";

const Notify = ({ post, handleDelete, handleApproved }) => {
  const { _id, title, blog_cover, posted_time, approved } = post;

  return (
    <div className="col-lg-4 col-md-3 col-12  p-0">
      <div className="allBlog_columns">
        <img src={blog_cover} className="img-fluid" alt="" />
        <div className="blog_body">
          <div className="static_text">
            <h5>PHOTOGRAPHY</h5>

            <div className="admin_icons">
              <div className="approved_input">
                <div className="icon_buttons">
                  <Link to={`/dashboard/review-blogs/${_id}`}>
                    {" "}
                    <i class="fa fa-eye me-2" aria-hidden="true"></i>
                  </Link>

                  <i
                    onClick={() => handleDelete(_id)}
                    class="fas fa-trash"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="blog_time_hr"></div>
          <div className="time_of_blog">
            <small className="fst-italic">
              <i class="far fa-clock me-2"></i>
              {posted_time}
            </small>

            <button
              className="btn btn-outline-success"
              onClick={() => handleApproved(true, _id)}
            >
              {approved ? "Approved" : "Hanging"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;
