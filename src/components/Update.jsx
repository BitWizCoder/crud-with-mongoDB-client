import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);
    console.log(loadedUser);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h3 className="mb-5">Update information of {loadedUser.name}</h3>

      <form onSubmit={handleUpdate}>
        <input
          defaultValue={loadedUser.name}
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered input-accent w-full max-w-xs mb-4"
        />
        <br />
        <input
          defaultValue={loadedUser.email}
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered input-accent w-full max-w-xs mb-4"
        />
        <br />
        <input
          className="btn btn-neutral mb-4"
          type="submit"
          value={"Update"}
        />
        <Link to="/">
          <button className="btn btn-neutral">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
