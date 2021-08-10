import { Component } from "react";
import { Card, Button } from "react-bootstrap";
class Book extends Component{
    render(){
        return(
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button variant="danger">Delete Book!</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Book;