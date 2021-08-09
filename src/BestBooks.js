import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel'
// import Jumbotron from 'react-bootstrap/Jumbotron';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      errMsg: '',
    };
  }

  componentDidMount() {
    const { user } = this.props.auth0;
    const url = `${process.env.REACT_APP_SERVER_URL}/books?email=${user.email}`;

    axios
      .get(url)
      .then(result => {
        const data = result.data;
        this.setState({
          books: data,
        });
      })
      .catch(err => {
        this.setState({
          errMsg: err.message
        })
      });
  }



  render() {
    return (<>
      {this.state.books.length ? (<Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.books[0].img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{coler :'orang'}}>{this.state.books[0].title}</h3>
            <p style={{coler :'orang'}}>{this.state.books[0].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.books[1].img}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{coler :'orang'}}>{this.state.books[1].title}</h3>
            <p style={{coler :'orang'}}>{this.state.books[1].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.state.books[2].img}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{coler :'orang'}}>{this.state.books[2].title}</h3>
            <p style={{coler :'orang'}}>{this.state.books[2].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>) : 'No favorite Books'




    }

    </>

    );
  }
}

export default withAuth0(MyFavoriteBooks);
