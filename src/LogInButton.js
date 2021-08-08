import { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class LoginButton extends Component{
    render(){

        const {
            loginWithRedirect
          } = this.props.auth0;

        return (
            <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Log In</Card.Title>
                <Card.Text>
                    Click Below to Log In
                </Card.Text>
                {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
                <Button onClick={loginWithRedirect}>Log in</Button>
                </Card.Body>
            </Card>
            </>
        );
    }
}

export default withAuth0(LoginButton);