import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUser] = useState(loadedUsers);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = users.filter((user) => user._id !== id);
        setUser(remaining);
      });
  };

  return (
    <div>
      <div className="text-left">
        {users.length ? (
          users.map((user) => (
            <div className="mb-3" key={user._id}>
              <p>
                <span className="font-bold">Name :</span> {user.name}
                <span className="font-bold">Email :</span> {user.email}{" "}
                <Link to={`/update/${user._id}`}>
                  <button className="btn btn-neutral mr-4 ml-4">Update</button>
                </Link>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-neutral"
                >
                  X
                </button>
              </p>
            </div>
          ))
        ) : (
          <h1 className="text-center text-4xl">no user found.</h1>
        )}
      </div>
    </div>
  );
};

export default Users;
