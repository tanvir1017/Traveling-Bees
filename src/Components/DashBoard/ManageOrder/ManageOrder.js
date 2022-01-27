import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const ManageOrder = () => {
  const { id } = useParams();

  const [editBlogs, setEditBlogs] = useState({});
  useEffect(() => {
    fetch(
      `https://peaceful-castle-84704.herokuapp.com/blogs/manageOrders/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEditBlogs(data);
      });
  }, [id]);
  const {
    title,
    blog_cover,
    writer_img,
    sub_desc,
    writer_name,
    writer_about_title,
    writer_about_img,
    releted_title1,
    releted_title2,
    releted_desc1,
    releted_desc2,
    releted_img1,
    releted_img2,
    releted_img3,
    releted_img4,
  } = editBlogs;
  const handleLoading = (e) => {
    e.preventDefault();
    fetch(
      `https://peaceful-castle-84704.herokuapp.com/blogs/manageOrders/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editBlogs),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal(
            "Content Update Successfully!",
            "You Just Update A Blog!",
            "success"
          );
        } else {
          swal(
            "No item updated",
            "If you want to update somethings please select the field",
            "info"
          );
        }
      });
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const updatedPost = { ...editBlogs };
    updatedPost[field] = value;
    setEditBlogs(updatedPost);
  };
  return (
    <div className="container">
      <div className="heading_title_add_blogs">
        <h2>Blog Edit</h2>
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
                defaultValue={title}
                placeholder="Blog Title"
              />
            </div>
            <div className="col-lg-5 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="blog_cover"
                className="default_style blog_cover"
                type="text"
                defaultValue={blog_cover}
                placeholder="Blog Cover"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="writer_name"
                className="default_style"
                type="text"
                defaultValue={writer_name}
                placeholder="writer name"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="writer_img"
                className="default_style"
                type="text"
                defaultValue={writer_img}
                placeholder="writer img"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="writer_about_img"
                className="default_style"
                type="text"
                defaultValue={writer_about_img}
                placeholder="writer about img"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_img1"
                className="default_style"
                type="text"
                defaultValue={releted_img1}
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
                defaultValue={releted_img2}
                placeholder="Slider img"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_img2.1"
                className="default_style"
                type="text"
                defaultValue={releted_img2}
                placeholder="Slider img1 "
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_img2.2"
                className="default_style"
                type="text"
                defaultValue={releted_img3}
                placeholder="Slider img2"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_img2.3"
                className="default_style"
                type="text"
                defaultValue={releted_img4}
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
                defaultValue={writer_about_title}
                placeholder="writer desc"
              />
            </div>
            <div className="col-lg-6 col-12">
              <textarea
                onBlur={handleOnBlur}
                name="sub_desc"
                rows="7"
                type="text"
                defaultValue={sub_desc}
                placeholder="blog desc"
              />
            </div>
            <div className="col-lg-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_title1"
                className="default_style"
                type="text"
                defaultValue={releted_title1}
                placeholder="Right Side Title"
              />
            </div>
            <div className="col-lg-6 col-12">
              <input
                onBlur={handleOnBlur}
                name="releted_title2"
                className="default_style"
                type="text"
                defaultValue={releted_title2}
                placeholder="Left Side Title"
              />
            </div>
            <div className="col-lg-6 col-12">
              <textarea
                onBlur={handleOnBlur}
                name="releted_desc1"
                rows="7"
                type="text"
                defaultValue={releted_desc1}
                placeholder="Right Side desc"
              />
            </div>
            <div className="col-lg-6 col-12">
              <textarea
                onBlur={handleOnBlur}
                name="releted_desc2"
                rows="7"
                type="text"
                defaultValue={releted_desc2}
                placeholder="Slider desc"
              />
            </div>
          </div>
          <button type="submit" className="default_btn">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageOrder;
