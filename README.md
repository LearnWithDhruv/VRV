
# Admin Dashboard

## Overview
This project is a React-based Admin Dashboard for managing users, roles, and permissions. The application allows administrators to:
- View, add, edit, and delete users.
- Manage roles and assign permissions.
- Dynamically modify permissions for roles.
- Simulate API interactions using JSON Server.

---

## Features
### User Management
- View users in a table with details like name, email, role, and status.
- Add new users through a form.
- Edit existing users.
- Delete users.

### Role Management
- View roles and their associated permissions.
- Add new roles with custom permissions.
- Edit roles and permissions.

### Dynamic Permissions
- Assign permissions dynamically to roles.
- Modify permissions for existing roles.

### API Simulation
- Mocked API using JSON Server for CRUD operations on users and roles.

---

## Prerequisites
Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+)
- npm (comes with Node.js)
- A modern web browser

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd admin-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up JSON Server**:
   Install JSON Server globally or as a dev dependency:
   ```bash
   npm install -g json-server
   ```

4. **Create the Mock API Data File**:
   Create a `db.json` file in the root directory with the following content:
   ```json
   {
     "users": [
       { "id": 1, "name": "John Doe", "email": "john@example.com", "role": "Admin", "status": "Active" }
     ],
     "roles": [
       { "id": 1, "name": "Admin", "permissions": ["Read", "Write", "Delete"] }
     ]
   }
   ```

---

## Running the Application

1. **Start the Mock API Server**:
   ```bash
   json-server --watch db.json --port 3001
   ```

2. **Start the React App**:
   ```bash
   npm start
   ```

3. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```plaintext
admin-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Users/
│   │   │   ├── UserList.js
│   │   │   ├── UserForm.js
│   │   │   ├── UserEditForm.js
│   │   └── Roles/
│   │       ├── RoleList.js
│   │       ├── RoleForm.js
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── UsersPage.js
│   │   └── RolesPage.js
│   ├── services/
│   │   ├── api.js
│   ├── App.js
│   ├── index.js
├── db.json
└── package.json
```

---

## Key Files

### `src/components/Users/UserList.js`
Displays a table of users with options to edit or delete.

### `src/components/Users/UserForm.js`
Form to add new users.

### `src/components/Users/UserEditForm.js`
Form to edit existing users.

### `src/components/Roles/RoleList.js`
Displays a list of roles with their permissions.

### `src/components/Roles/RoleForm.js`
Form to add or edit roles.

### `db.json`
Contains mock data for users and roles.

---

## How to Add New Features

1. **Update `db.json` for Mock Data**:
   Add new collections or update existing data.

2. **Add New Components**:
   Create reusable components in the `src/components` directory.

3. **Integrate API Calls**:
   Update `api.js` to include new API endpoints.

---

## Common Issues

### JSON Server Not Starting
- Ensure the `db.json` file is valid JSON (no trailing commas).

### React App Not Running
- Check for missing dependencies and run:
  ```bash
  npm install
  ```

### API Errors
- Ensure JSON Server is running on `http://localhost:3001`.

---

## Deployment
1. Build the app for production:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to a hosting platform (e.g., Netlify, Vercel).

---

## License
This project is licensed under the MIT License.
