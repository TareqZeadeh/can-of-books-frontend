import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";
import LogInButton from './LogInButton';


function Login() {
  const {
    isAuthenticated,
  } = useAuth0();

  return !isAuthenticated && <LogInButton />
}

export default Login;
