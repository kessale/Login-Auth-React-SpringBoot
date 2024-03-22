import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Component for adding a new user.
export default function AddUser() {
  let navigate = useNavigate(); // Hook to programmatically navigate to other routes.

  // State to store user input for name, username, and email.
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  // Destructuring for direct access to each input field's state.
  const { name, username, email } = user;

  // Updates the user state whenever input fields change.
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Submits the user data to the backend and navigates to the homepage on success.
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">E-mail</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
