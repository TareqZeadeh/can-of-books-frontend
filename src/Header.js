import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LogOutButton from './LogOutButton';
import { withAuth0 } from '@auth0/auth0-react';
import LogInButton from './LogInButton';


class Header extends React.Component {
  render() {
    const {isAuthenticated} =this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/" className="mr-3">Home</Link>
        {isAuthenticated && <Link to="/profile" className="mr-3">Profile</Link>}
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {!isAuthenticated ? <LogInButton /> : <LogOutButton />}

        {/* {isAuthenticated ? <Link ><LogoutButton/></Link>  : <Link ><Login/></Link>} */}
        {/* <Link to="/Login">Login</Link> */}

      </Navbar>
    );
  }
}

export default withAuth0(Header);
