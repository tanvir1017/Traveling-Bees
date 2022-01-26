import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import UseAuth from "../../Hooks/UseAuth";
import UserOrder from "./UserOrder";

const UserOrders = () => {
  const { user } = UseAuth();
  const [orders, setOrders] = useState([]);
  const [num, setNum] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/email?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user.email]);

  // delete from client and backend
  const handleDelete = (id) => {
    const url = `http://localhost:5000/enrollCourse/${id}`;
    fetch(url, {
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
              swal("Poof! Your file has been deleted!", {
                icon: "success",
              });
              const remaining = orders.filter((dt) => dt._id !== id);
              setOrders(remaining);
              setNum(num + 1);
            }
          } else {
            swal("Your imaginary file is safe!");
          }
        });
      });
  };
  return (
    <div className="container">
      <div className="row">
        {orders.map((data) => (
          <UserOrder
            key={data._id}
            data={data}
            handleDelete={handleDelete}
          ></UserOrder>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;
