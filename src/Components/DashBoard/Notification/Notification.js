import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Notify from "./Notify";
import "./Notify.css";

const Notification = () => {
  const [postedBlogs, setPostedBlogs] = useState([]);
  const [num, setNum] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.result.filter((blog) => blog.approved === false);
        setPostedBlogs(remaining);
        setNum((num) => num + 1);
      });
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            if (data.deletedCount > 0) {
              const remaining = postedBlogs.filter((blog) => blog._id !== id);
              setPostedBlogs(remaining);
              setNum(num + 1);
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            }
          } else {
            swal("Your imaginary file is safe!");
          }
        });
      });
  };
  const handleApproved = (e, _id) => {
    const approved = e;
    fetch(`http://localhost:5000/blogs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ _id, approved }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal(
            "Content Update Successfully!",
            "You Just Update A Blog!",
            "success"
          );
          setNum((num) => num + 1);
        } else {
          swal(
            "No item updated",
            "If you want to update somethings please select the field",
            "info"
          );
        }
      });
  };
  return (
    <div className="container  allBlog_wrapper">
      <div className="blog_title ">
        <h2>Post Review</h2>
      </div>
      <div className="row g-0">
        {postedBlogs.map((post) => (
          <Notify
            key={post._id}
            post={post}
            handleDelete={handleDelete}
            handleApproved={handleApproved}
          ></Notify>
        ))}
      </div>
    </div>
  );
};

export default Notification;
