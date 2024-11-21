import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  };

  const navStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#007bff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Admin Dashboard</h1>
      <nav style={navStyle}>
        <Link
          to="/users"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Manage Users
        </Link>
        <Link
          to="/roles"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Manage Roles
        </Link>
      </nav>
    </div>
  );
};

export default Dashboard;
