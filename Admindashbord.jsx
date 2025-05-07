import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './src/Admine pages/Nav';

const AdminLayout = () => {
  return (
    <div>
      <AdminNavbar />
      <div style={{ marginTop: '-800px', marginLeft: '250px', padding: '20px'  }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;