import React, { useState } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    let username = useState('');

    if(auth?.username){
        localStorage.setItem('username', auth?.username);
    }

    if(localStorage.getItem('username')){
        username = localStorage.getItem('username');
    }

    console.log(username);

    return (      
        username
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location}} replace />
    )

};

export default RequireAuth;