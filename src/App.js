import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import { useAuth0 } from '@auth0/auth0-react';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './Profile';
import LogInButton from './LogInButton';
import LogoutButton from './LogOutButton';
// import LogoutButton from './LogoutButton';

class App extends React.Component {

  render() {
    console.log('app', this.props);
    console.log(this.props.auth0);
    const {isAuthenticated} =this.props.auth0;
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                { 
                   isAuthenticated ? <BestBooks/> : <Login/>
                }
                {/* {isAuthenticated ?  <LogoutButton /> : <Login />} */}
              </Route >
              <Route exact path="/Profile">
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                {
                  // isAuthenticated ?  <Profile /> : <Login />
                  <Profile />
                  
                }
                {/* {isAuthenticated ?  <LogoutButton /> : <Login />} */}
              </Route >

              <Route exact path="/Login">
                <LogInButton />
              </Route>
              
              <Route exact path="/Logout">
                <LogoutButton />
              </Route>
            
            </Switch>
            {/* { !isAuthenticated ? <Login /> : <BestBooks />} */}
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>

        
      </>
    );
  }
}

export default withAuth0(App);
