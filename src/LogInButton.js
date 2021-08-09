import { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';


class LoginButton extends Component{
    render(){

        const {
            isAuthenticated,
            loginWithRedirect
          } = this.props.auth0;

        return (
            <>
              {!isAuthenticated && <Button onClick={loginWithRedirect} style={{backgroundColor: '#2ecc71'}}>Log in</Button>}
            </>
        );
    }
}

export default withAuth0(LoginButton);