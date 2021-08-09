import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Container} from "react-bootstrap";
import LogOutButton from "./LogOutButton";
class Logout extends Component{
    
    render(){
        const {isAuthenticated} =this.props.auth0;
        return(
            isAuthenticated && <Container className="d-flex justify-content-center align-items-center m-5">
                                    <LogOutButton />
                               </Container>
        );
    }
}


export default withAuth0(Logout);