import React, {useContext} from "react";
import {UserContext} from '../context/userContext'
import DisplayUser from "./DisplayUser";
import PropTypes from "prop-types";
//styling
import { Container, Row } from "react-bootstrap";

const UsersContainer = (props) => {
  // const { users, handleDelete } = props;
  const { users, handleDelete } = useContext(UserContext)


  return (
    <Container>
      <Row>
        {users.map((user) => (
          <DisplayUser user={user} handleDelete={handleDelete} key={user.id} />
        ))}
      </Row>
    </Container>
  );
};

export default UsersContainer;

UsersContainer.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};
