import React from "react";

const UserOrder = ({ data, handleDelete }) => {
  const { _id } = data;

  return (
    <div>
      <h2>
        {data.subTitle} <button onClick={() => handleDelete(_id)}>X</button>{" "}
      </h2>
    </div>
  );
};

export default UserOrder;
