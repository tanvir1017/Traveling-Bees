import React, { useState } from "react";
import swal from "sweetalert";
import commentGif from "../../../Img/course_content/Your.png";
import UseAuth from "../../Hooks/UseAuth";

const ContactUs = () => {
  const { user } = UseAuth();
  const mainEmail = user.email;
  const photoURL = user.photoURL;
  let date = new Date();
  let comment_time = date.toLocaleDateString();
  const userName = user.displayName;
  const [comment, setComment] = useState({
    photoURL,
    comment_time,
    mainEmail,
    userName,
  });
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newComment = { ...comment };
    newComment[field] = value;
    setComment(newComment);
  };
  const handleLoading = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal(
            "Thank you for your comment!",
            "We received your comment",
            "success"
          );
        }
      });
  };
  return (
    <div className="container">
      <div className="heading_title_add_blogs">
        <img src={commentGif} alt="" />
      </div>
      <div className="post_form">
        <form onSubmit={handleLoading}>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-12"></div>
            <div className="col-lg-1 col-md-1 col-12"></div>

            <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <input
                    onBlur={handleOnBlur}
                    name="First_Name"
                    className="default_style"
                    type="text"
                    defaultValue={user.displayName}
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    onBlur={handleOnBlur}
                    name="Your_email"
                    className="default_style"
                    type="text"
                    defaultValue={user.email}
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    onBlur={handleOnBlur}
                    name="Your Phone"
                    className="default_style"
                    type="text"
                    placeholder="Your_Phone (must add country code)"
                  />
                </div>
                <div className=" col-12">
                  <textarea
                    onBlur={handleOnBlur}
                    name="Comment"
                    rows="7"
                    type="text"
                    placeholder="Comment"
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="default_btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
