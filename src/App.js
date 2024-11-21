import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import UserForm from "./components/Users/UserForm";
import RolesPage from "./pages/RolesPage";
import RoleForm from "./components/Roles/RoleForm";
import UserEditForm from "./components/Users/UserEditForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/add" element={<UserForm />} />
      <Route path="/roles" element={<RolesPage />} />
      <Route path="/users/edit/:id" element={<UserEditForm />} />
      <Route path="/roles/add" element={<RoleForm />} />
    </Routes>
  );
};

export default App;
