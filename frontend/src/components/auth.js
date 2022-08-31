import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const  ProtectedRoutes=(props) =>{
  return props.authHandler.status ? <Outlet/>: <Navigate to="/login"/>
}

export default ProtectedRoutes;
