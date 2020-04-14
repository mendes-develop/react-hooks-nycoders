import React, {useEffect} from "react";
import PropTypes from "prop-types";
//styling
import { Card, Container, Button } from "react-bootstrap";

export default function DisplayUser(props){
  //access props and display each element on its own div
  
    const { user, handleDelete } = props;

    useEffect(()=>{ //componentDidmount, componentWillUnmount
      console.log("Display user component")

      return ()=> {
        console.log(user)
      }

    },[])

      return (
        <Card style={{ width: "18rem", margin: "5px" }}>
          <Container>
            <h3>{user.username}</h3>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
  
            <Button variant="danger" onClick={() => handleDelete(user.id)}>
              Delete User
            </Button>
          </Container>
        </Card>
      );

  
}

DisplayUser.propTypes = {
  user: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
};
