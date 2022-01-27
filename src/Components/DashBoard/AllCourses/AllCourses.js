import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Allcourse from "./Allcourse";
import "./Allcourse.css";

const AllCourses = () => {
  const [blogs, setBlogs] = useState([]);
  const [num, setNum] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.result.filter((blog) => blog.approved === true);
        setBlogs(remaining);
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
              const remaining = blogs.filter((blog) => blog._id !== id);
              setBlogs(remaining);
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
  return (
    <div className="container  allBlog_wrapper">
      <div className="blog_title ">
        <img
          src="https://meridianthemes-demo.net/the-traveler/wp-content/themes/the-traveler/images/logo.png"
          alt=""
        />
      </div>
      <div className="row g-0">
        {blogs.map((blog) => (
          <Allcourse
            key={blog._id}
            blog={blog}
            handleDelete={handleDelete}
          ></Allcourse>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
