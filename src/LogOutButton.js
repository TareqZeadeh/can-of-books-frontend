import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from 'react-bootstrap';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();
  return isAuthenticated && (
    <Container className="d-flex justify-content-center align-items-center m-5">
      <Button 
        className='w-25 '
        onClick={() => {
          logout({ returnTo: window.location.origin });
       }} >Log out</Button>
    </Container>

  );
  
}

export default LogoutButton;
