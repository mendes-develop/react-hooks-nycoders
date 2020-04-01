import React from "react";
import DisplayUser from "./DisplayUser";
import PropTypes from "prop-types";

//styling
import { Container, Row } from "react-bootstrap";

export default function UsersContainer(props){
  
    return (
      <Container>
        <Row>
          {props.users.map(user => (
            <DisplayUser
              user={user}
              deleteUser={props.deleteUser}
              key={user.id}
            />
          ))}
        </Row>
      </Container>
    );
  
}

UsersContainer.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};
