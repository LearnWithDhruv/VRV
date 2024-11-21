import React, { useEffect, useState } from "react";
import axios from "../../services/api";

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get("/roles").then((response) => setRoles(response.data));
  }, []);

  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#333",
  };

  const buttonStyle = {
    margin: "10px 0",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  const listStyle = {
    marginTop: "20px",
    padding: "0",
    listStyleType: "none",
  };

  const listItemStyle = {
    padding: "10px",
    backgroundColor: "#fff",
    marginBottom: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const roleNameStyle = {
    fontWeight: "bold",
    fontSize: "1rem",
  };

  const permissionsStyle = {
    fontSize: "0.9rem",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Roles</h2>
      <button
        style={buttonStyle}
        onClick={() => (window.location.href = "/roles/add")}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Add Role
      </button>
      <ul style={listStyle}>
        {roles.map((role) => (
          <li key={role.id} style={listItemStyle}>
            <span style={roleNameStyle}>{role.name}</span>
            <span style={permissionsStyle}>
              Permissions: {role.permissions.join(", ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleList;
