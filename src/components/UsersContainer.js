import React, { Component } from "react";
import DisplayUser from "./DisplayUser";
import PropTypes from "prop-types";

//styling
import { Container, Row } from "react-bootstrap";

export default class UsersContainer extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.users.map(user => (
            <DisplayUser
              user={user}
              deleteUser={this.props.deleteUser}
              key={user.id}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

UsersContainer.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};
