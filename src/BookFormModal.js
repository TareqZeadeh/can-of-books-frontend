import { Component } from "react";
import { Button, Form, Modal } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

class BookFormModal extends Component{

    submitHandler = (event) => {
        event.preventDefault();
        const {user} = this.props.auth0;
        const paramsData = {
            userEmail: user.email,
            title: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.value,
        };

        axios
        .post(`${process.env.REACT_APP_SERVER_URL}/books`, paramsData)
        .then(result => {
            this.props.addBookToBooks(result.data);
        })
        .catch( err => console.log(err));
        
        this.props.closeModel();
        event.target.reset();
      }; 

    render(){
        return(
            <>
             <Modal
              show={this.props.toShow}
              onHide={() => this.props.closeModel()}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Add New Book
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group>
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Attack On Titan"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Book Description</Form.Label>
                        <Form.Control as="textarea" name="description"/>
                    </Form.Group>

                    <Form.Control as="select" name="status">
                        <option value="recomended">RECOMENDED TO ME</option>
                        <option value="top five" >TOP FIVE</option>
                        <option value="favorite one" >FAVORITE ONE</option>
                    </Form.Control>
                    <Button type="submit">Add</Button>
                </Form>
              </Modal.Body>
            </Modal>
            </>
        );
    }
}

export default withAuth0(BookFormModal);