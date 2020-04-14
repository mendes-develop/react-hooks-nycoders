import React from "react";
import DisplayUser from "./DisplayUser";
import PropTypes from "prop-types";
//styling
import { Container, Row } from "react-bootstrap";

export default class UsersContainer extends React.Component {
  render() {

    const { users, handleDelete } = this.props;

    return (
      <Container>
        <Row>
          {users.map((user) => (
            <DisplayUser user={user} handleDelete={handleDelete} key={user.id} />
          ))}
        </Row>
      </Container>
    );
  }
}

UsersContainer.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};
