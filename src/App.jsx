import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    e.target.reset();

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("User added succesfully.");
        }
      });
  };

  return (
    <>
      <h1 className="text-4xl mb-4">Simple crud</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered input-accent w-full max-w-xs mb-4"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered input-accent w-full max-w-xs mb-4"
        />
        <br />
        <input
          className="btn btn-neutral mb-4"
          type="submit"
          value={"Add User"}
        />
      </form>
    </>
  );
}

export default App;
