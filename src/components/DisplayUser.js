import React from "react";
import PropTypes from "prop-types";

//styling
import { Card, Container, Button } from "react-bootstrap";

export default function DisplayUser(props){
  //access props and display each element on its own div

    const { deleteUser, user } = props;

    return (
      <Card style={{ width: "18rem", margin: "5px" }}>
        <Container>
          <h3>{user.username}</h3>
          <p>Name:{user.name}</p>
          <p>Email:{user.email}</p>

          <Button variant="danger" onClick={() => deleteUser(user.id)}>
            Delete User
          </Button>
        </Container>
      </Card>
    );
  
}

DisplayUser.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired
};
