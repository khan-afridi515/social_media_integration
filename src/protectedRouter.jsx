import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({children}) => {
  const myTokenLogin = localStorage.getItem("myLoginToken");
  return myTokenLogin ? children : <Navigate to="/login" replace/>
}

export default ProtectedRouter
