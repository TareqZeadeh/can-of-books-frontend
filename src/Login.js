import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Card } from 'react-bootstrap';
import LogInButton from './LogInButton';


class Login extends React.Component {
render(){
  const {isAuthenticated} = this.props.auth0;
  return !isAuthenticated && (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>Log In</Card.Title>
    <Card.Text>
        Click Below to Log In
    </Card.Text>
    {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
    <LogInButton />
    </Card.Body>
</Card>
  );
}

}

export default withAuth0(Login);
