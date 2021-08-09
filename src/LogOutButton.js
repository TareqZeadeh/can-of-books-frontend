import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Button} from 'react-bootstrap';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();
  return isAuthenticated && 
  <Button 
     style={{backgroundColor: '#c0392b'}}
     onClick={() => {
          logout({ returnTo: window.location.origin });
      }} >Log out</Button>;
  
}

export default LogoutButton;
