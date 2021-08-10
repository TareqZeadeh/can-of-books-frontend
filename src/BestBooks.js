import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Button, Container} from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import Book from './Book';
// import Carousel from 'react-bootstrap/Carousel'

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      errMsg: '',
      toShow: false,
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

  addBookHandler =  () =>{
    this.setState({
      toShow: true,
    });
  };

  addBookToBooks =  (book) =>{
    this.setState({
      books: this.state.books.push(book),
    });
  };


  closeModel = () =>{
    this.setState({
      toShow: false,
    });
  }

  deleteBook =(id)=>{
    const {user} = this.props.auth0;
    const data={
      userEmail : user.email
    };

    axios
    .delete(`${process.env.REACT_APP_SERVER_URL}/books/${id}`,{params: data})
    .then( result =>{
      this.setState({
        books : result.data
      });}
    )

    .catch( (err) =>
    {
      console.log(err);

    });
    

  }

  render() {
    return (
    <>
      <Button onClick={this.addBookHandler} style={{backgroundColor: '#c0392b', margin: '7rem'}}>Add Book</Button>
      {this.state.toShow && <BookFormModal 
                              toShow={this.state.toShow} 
                              closeModel={this.closeModel}
                              addBookToBooks={this.addBookToBooks}
                              />}
                              {
                                <Container className="d-flex flex-wrap align-items-baseline justify-content-center">
                                  {this.state.books.map((item ,index) => <Book deleteBook={this.deleteBook} index={index} title={item.title} description={item.description} status={item.status}/>)}
                                </Container>
                              }
      
    </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);



// this.state.books.length ? (<Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={this.state.books[0].img}
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3 style={{coler :'orang'}}>{this.state.books[0].title}</h3>
//       <p style={{coler :'orang'}}>{this.state.books[0].description}</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={this.state.books[1].img}
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3 style={{coler :'orang'}}>{this.state.books[1].title}</h3>
//       <p style={{coler :'orang'}}>{this.state.books[1].description}</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={this.state.books[2].img}
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3 style={{coler :'orang'}}>{this.state.books[2].title}</h3>
//       <p style={{coler :'orang'}}>{this.state.books[2].description}</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>) : 'No favorite Books'
