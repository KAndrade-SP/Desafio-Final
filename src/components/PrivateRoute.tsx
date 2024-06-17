import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../redux/Auth/selectors'

const PrivateRoute: React.FC = () => {

  const isAuthenticated = useSelector(selectIsAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to="/signIn" />
}

export default PrivateRoute