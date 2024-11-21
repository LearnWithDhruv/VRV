import React, { useEffect, useState } from "react";
import axios from "../../services/api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then((response) => setUsers(response.data));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`/users/${id}`).then(() => setUsers(users.filter((u) => u.id !== id)));
  };

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

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thStyle = {
    textAlign: "left",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  const actionButtonStyle = {
    margin: "0 5px",
    padding: "5px 10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const deleteButtonStyle = {
    ...actionButtonStyle,
    backgroundColor: "#dc3545",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Users</h2>
      <button
        style={buttonStyle}
        onClick={() => (window.location.href = "/users/add")}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Add User
      </button>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.role}</td>
              <td style={tdStyle}>{user.status}</td>
              <td style={tdStyle}>
                <button
                  style={actionButtonStyle}
                  onClick={() => (window.location.href = `/users/edit/${user.id}`)}
                >
                  Edit
                </button>
                <button
                  style={deleteButtonStyle}
                  onClick={() => deleteUser(user.id)}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#b21f2d")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#dc3545")}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
