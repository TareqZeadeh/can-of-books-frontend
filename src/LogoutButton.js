import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";
// import Button from 'react-bootstrap/Button';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();
  return isAuthenticated && (
    <button onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</button>
  );
  
}

export default LogoutButton;
{/* <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Log In</Card.Title>
      <Card.Text>
        Click Below to Log In
      </Card.Text>
      {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
//       <button onClick={() => {
//       logout({ returnTo: window.location.origin });
//     }}>Log out</button>
//     </Card.Body>
//   </Card> */}
// return isAuthenticated && (
//     <Card style={{ width: '18rem' }}>
//     <Card.Body>
    
//       {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
//       <Button onClick={logout}>Log out</Button>
//     </Card.Body>
//   </Card>
//   );