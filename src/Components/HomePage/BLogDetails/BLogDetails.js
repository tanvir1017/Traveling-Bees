import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const BLogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});
  useEffect(() => {
    fetch(`https://peaceful-castle-84704.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [id]);
  return (
    <div>
      <Navbar />
      <h2>This is blog details {blogs.title}</h2>
    </div>
  );
};

export default BLogDetails;
