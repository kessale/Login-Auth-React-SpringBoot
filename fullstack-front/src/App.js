// Imports the required styles and components.
import "./App.css"; // Application-specific styles.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Bootstrap for styling.
import Navbar from "./layout/Navbar"; // The navigation bar component.
import Home from "./pages/Home"; // The Home page component.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router components for routing.
import AddUser from "./users/AddUser"; // The Add User page component.
import EditUser from "./users/EditUser"; // The Edit User page component.
import ViewUser from "./users/ViewUser"; // The View User page component.

// The main App component.
function App() {
  return (
    <div className="App">
      <Router>
        {/* Wraps the application in a Router component to enable routing. */}
        <Navbar />
        {/* The navigation bar that appears on all pages. */}
        <Routes>
          {/* Defines the routes for the application. */}
          <Route exact path="/" element={<Home />} />
          {/* The route for the Home page. */}
          <Route exact path="/adduser" element={<AddUser />} />
          {/* The route for the Add User page. */}
          <Route exact path="/edituser/:id" element={<EditUser />} />
          {/* The route for the Edit User page, with a dynamic segment for the user ID. */}
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          {/* The route for the View User page, with a dynamic segment for the user ID. */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
