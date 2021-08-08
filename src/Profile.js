import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
// import { useAuth0 } from "@auth0/auth0-react";

class Profile extends Component {

  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(isAuthenticated);
    return(
        <>
            { isAuthenticated && 
            <>
            <div>Hello {user.name}</div>
            <div>Email {user.email}</div>
            {/* <div> <a href={user.picture}> Picture </a> </div> */}
            <div> <img src = {user.picture} alt= ''/>  </div>

            </>
            }
        </>
    );
  }
}

export default withAuth0(Profile);
