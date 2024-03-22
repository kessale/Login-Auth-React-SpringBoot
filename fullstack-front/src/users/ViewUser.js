import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Component for viewing a single user's details.
export default function ViewUser() {
    // State to store the user details.
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    // Extracting user ID from the URL parameters.
    const { id } = useParams();

    // Fetches user details from the backend on component mount.
    useEffect(() => {
        loadUser();
    }, []);

    // Function to fetch user details based on ID and set the state.
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>
                    
                    <div className="card">
                        <div className="card-header">
                            // Displaying the fetched user details.
                            Details of user id : {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name: </b>
                                    {user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Username: </b>
                                    {user.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Email: </b>
                                    {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    // Link to navigate back to the homepage.
                    <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
