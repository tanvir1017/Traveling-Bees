import React, { useState } from "react";
import swal from "sweetalert";
import "./AddCourse.css";

const AddCourse = () => {
  const [blogPost, setBlogPost] = useState([]);
  const handleLoading = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Good job!", "You Just Posted A Blog!", "success");
        }
      });
  };
  let date = new Date();
  let posted_time = date.toLocaleDateString();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newPost = { ...blogPost, posted_time };
    newPost[field] = value;
    setBlogPost(newPost);
  };
  return (
    <div className="container">
      <div className="heading_title_add_blogs">
        <h2>Add your experience </h2>
      </div>
      <div className="post_form">
        <form onSubmit={handleLoading}>
          <div className="row">
            <div className="col-lg-7 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="title"
                className="default_style blog_title"
                type="text"
                placeholder="Blog Title"
              />
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="blog_cover"
                className="default_style blog_cover"
                type="text"
                placeholder="Blog Cover"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="writer_name"
                className="default_style"
                type="text"
                placeholder="writer name"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="writer_img"
                className="default_style"
                type="text"
                placeholder="writer img"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="writer_about_img"
                className="default_style"
                type="text"
                placeholder="writer about img"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_img1"
                className="default_style"
                type="text"
                placeholder="Right side img"
              />
            </div>
            {/* blog cover */}
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_img2"
                className="default_style"
                type="text"
                placeholder="Slider img"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_img2.1"
                className="default_style"
                type="text"
                placeholder="Slider img1 "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_img2.2"
                className="default_style"
                type="text"
                placeholder="Slider img2 "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_img2.3"
                className="default_style"
                type="text"
                placeholder="Slider img3 "
              />
              {/* <p>img must be 770 x 486</p> */}
            </div>
          </div>

          {/* blog desc with writer */}
          <div className="row">
            <div className="col-lg-6 col-12">
              <textarea
                onBlur={handleOnBlur}
                name="writer_bio"
                rows="7"
                type="text"
                placeholder="writer desc"
              />
            </div>
            <div className="col-lg-6 col-12">
              <textarea
                onBlur={handleOnBlur}
                name="sub_desc"
                rows="7"
                type="text"
                placeholder="blog desc"
              />
            </div>
            <div className="col-lg-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_title1"
                className="default_style"
                type="text"
                placeholder="Right Side Title"
              />
            </div>
            <div className="col-lg-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_title2"
                className="default_style"
                type="text"
                placeholder="Left Side Title"
              />
            </div>
            <div className="col-lg-6 col-12">
              <textarea
                onBlur={handleOnBlur}
                name="releted_desc1"
                rows="7"
                type="text"
                placeholder="Right Side desc"
              />
            </div>
            <div className="col-lg-6 col-12">
              <textarea
                onBlur={handleOnBlur}
                name="releted_desc2"
                rows="7"
                type="text"
                placeholder="Slider desc"
              />
            </div>
          </div>
          <button type="submit" className="default_btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
