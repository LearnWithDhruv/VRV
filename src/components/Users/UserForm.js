import React, { useState } from "react";
import axios from "../../services/api";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", role: "", status: "Active" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/users", formData).then(() => (window.location.href = "/users"));
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
      <h2>Add User</h2>
      <label style={labelStyle}>Name:</label>
      <input
        type="text"
        style={inputStyle}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <label style={labelStyle}>Email:</label>
      <input
        type="email"
        style={inputStyle}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <label style={labelStyle}>Role:</label>
      <input
        type="text"
        style={inputStyle}
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      />
      <label style={labelStyle}>Status:</label>
      <select
        style={inputStyle}
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

export default UserForm;
