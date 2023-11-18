import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    const [isAdmin,isAdminLoading]=useAdmin()
    if (loading || isAdminLoading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={{from:location}} to="/login"></Navigate>;
};

export default AdminRoute;