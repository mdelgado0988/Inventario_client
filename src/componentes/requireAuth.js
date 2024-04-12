import React, { useState } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    let username = useState('');
    let uniqueid = useState('');

    if(auth?.username){
        console.log('tiene');
        localStorage.setItem('user', auth?.username);
        localStorage.setItem('uniqueid', auth?.uniqueid);
    }

    if(localStorage.getItem('user')){
        username = localStorage.getItem('user');
        uniqueid = localStorage.getItem('uniqueid');
    }

    // console.log(username);
    // console.log(uniqueid);

    return (      
        username
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location}} replace />
    )

};

export default RequireAuth;