import React, { useState } from "react";
import swal from "sweetalert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleAdminInput = (e) => {
    setEmail(e.target.value);
  };
  const handleMakeAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal(
            "Admin Make Successfully!",
            "You Just Make an admin!",
            "success"
          );
          setEmail("");
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
    <div className="container">
      <div className="heading">
        <h2>Make Admin</h2>
      </div>
      <div className="row">
        <div className=" col-12 d-flex justify-content-center align-items-center">
          <form onSubmit={handleMakeAdmin}>
            <input
              type="text"
              name="email"
              onBlur={handleAdminInput}
              placeholder="Enter admin email"
              className="default_style"
            />
            <button className="default_btn" type="submit">
              {" "}
              Make Admin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
