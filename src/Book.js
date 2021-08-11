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
                    <Button onClick={()=>{this.props.deleteBook(this.props.index)}} variant="danger">Delete Book!</Button>
                    <Button onClick={()=>{this.props.updateFormData(this.props.index)}} variant="primary">Update Book!</Button>
                </Card.Body>    
                <Card.Footer><Card.Text>{this.props.status}</Card.Text></Card.Footer>
            </Card>
        );
    }
}

export default Book;