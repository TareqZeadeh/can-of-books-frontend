import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
// import Jumbotron from 'react-bootstrap/Jumbotron';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [], 
    };
  }

  componentDidMount(){
    const {user} = this.props.auth0;
    const url = `${process.env.REACT_APP_SERVER_URL}/books?email=${user.email}`;

    axios
    .get(url)
    .then(result =>{
      const data = result.data;
        this.setState({
          data: data,
        });
    })
    .catch(err =>{});
  }

  render() {
    return(<></>
      // <Jumbotron>
      //   <h1>My Favorite Books</h1>
      //   <p>
      //     This is a collection of my favorite books
      //   </p>
      // </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
