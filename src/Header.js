import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    const {isAuthenticated} =this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home  </Link>
        <Link to="/profile">Profile  </Link>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}


        {/* {isAuthenticated ? <Link ><LogoutButton/></Link>  : <Link ><Login/></Link>} */}

        <Link ><LogoutButton/></Link>
        {/* <Link to="/Login">Login</Link> */}

      </Navbar>
    );
  }
}

export default withAuth0(Header);

{/* <LogoutButton /> */}
{/* <Login /> */}