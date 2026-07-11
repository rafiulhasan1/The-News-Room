import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Load from '../Components/Load';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (user && user?.email) {
        return children;
    }
    if(loading){
        return <Load></Load>
    }
    return (
        <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    );
};

export default PrivateRoute;