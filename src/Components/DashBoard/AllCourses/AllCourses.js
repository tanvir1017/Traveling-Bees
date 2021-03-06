import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import theTraveler from "../../../Img/course_content/The (1).png";
import Allcourse from "./Allcourse";
import "./Allcourse.css";

const AllCourses = () => {
  const [blogs, setBlogs] = useState([]);
  const [num, setNum] = useState(0);
  useEffect(() => {
    fetch("https://peaceful-castle-84704.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.result.filter((blog) => blog.approved === true);
        setBlogs(remaining);
      });
  }, []);
  const handleDelete = (id) => {
    fetch(`https://peaceful-castle-84704.herokuapp.com/blogs/${id}`, {
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
        <img src={theTraveler} alt="" />
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
