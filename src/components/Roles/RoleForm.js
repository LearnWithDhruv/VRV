import React, { useState } from "react";
import axios from "../../services/api";

const RoleForm = () => {
  const [formData, setFormData] = useState({ name: "", permissions: [] });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/roles", formData).then(() => (window.location.href = "/roles"));
  };

  const formStyle = {
    margin: "20px auto",
    padding: "20px",
    maxWidth: "400px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Add Role</h2>
      <label style={labelStyle}>Role Name:</label>
      <input
        type="text"
        style={inputStyle}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <label style={labelStyle}>Permissions:</label>
      <input
        type="text"
        style={inputStyle}
        value={formData.permissions}
        onChange={(e) => setFormData({ ...formData, permissions: e.target.value.split(",") })}
      />
      <button type="submit" style={buttonStyle}>Save</button>
    </form>
  );
};

export default RoleForm;
