import React, {useContext} from "react";
import DisplayUser from "./DisplayUser";
import PropTypes from "prop-types";
import {UserContext} from "../context/userContext"

//styling
import { Container, Row } from "react-bootstrap";

export default function UsersContainer(props){

  const {users, handleDelete} = useContext(UserContext)

  
    return (
      <Container>
        <Row>
          {users.map(user => (
            <DisplayUser
              user={user}
              deleteUser={handleDelete}
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
