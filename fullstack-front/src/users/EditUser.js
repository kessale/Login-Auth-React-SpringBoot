import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Component for editing an existing user's details.
export default function EditUser() {
  let navigate = useNavigate(); // Hook to navigate between routes.

  const { id } = useParams(); // Retrieves the user ID from the URL parameters.

  // State for storing the user object.
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  // Destructuring for easier access to user properties.
  const { name, username, email } = user;

  // Updates the user state based on form inputs.
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Fetches the user's current details from the backend upon component mount.
  useEffect(() => {
    loadUser();
  }, []);

  // Submits the updated user details to the backend.
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/"); // Redirects to the homepage after successful update.
  };

  // Fetches a single user's details based on the ID and updates the state.
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            // Form fields for editing user details.
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
