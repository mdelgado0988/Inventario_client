import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
    const location = useLocation();
    const user = JSON.parse( localStorage.getItem('user'));

    return (      
        user?.username
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location}} replace />
    )

};

export default RequireAuth;