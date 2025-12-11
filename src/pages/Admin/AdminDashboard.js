// src/pages/Admin/AdminDashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/admin/login');
    };

    return (
        <div style={{ padding: '50px', maxWidth: '800px', margin: '50px auto' }}>
            <h2>Admin Dashboard</h2>
            <p>Welcome, Admin!</p>
            <div style={{ marginTop: '30px' }}>
                <Link to="/admin/add" style={{ padding: '10px 20px', backgroundColor: '#7cb342', color: 'white', textDecoration: 'none', borderRadius: '5px', marginRight: '20px' }}>
                    + Add New Decoration
                </Link>
                <button onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Logout
                </button>
            </div>
            {/* Future: Add list of existing decorations here */}
        </div>
    );
};

export default AdminDashboard;